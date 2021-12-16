#!/bin/bash

BALENA_FLEET_AUTH_TOKEN=$1
BALENA_FLEET_ID=$2
TAG_DEVICE=$3
NUM_PROC=4

if [ "$#" -lt 2 ]; then
  echo "Usage: ./scan.sh \$BALENA_FLEET_AUTH_TOKEN \$BALENA_FLEET_ID" >&2
  exit 1
fi

echo -e "Depop Profile Test Script (pca963x)\n"

# Check balena-cli is installed
for command in "balena" "jq" "curl"; do
    if ! [ -x "$(command -v $command)" ]; then
    echo 'Error: $command is not installed.' >&2
    exit 1
    fi
done

# Get all device UUIDs in fleet
> suspect_devices.txt || true
fleet=$(curl -X GET \
"https://api.balena-cloud.com/v6/application(${BALENA_FLEET_ID})?\$expand=owns__device" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer ${BALENA_FLEET_AUTH_TOKEN}" \
-s)

# Write devices to text file
jq -r '.d | .[] | .owns__device[] | "\(.uuid) \(.id) \(.is_online) \(.api_heartbeat_state)"' <<< $fleet > fleet_devices.txt

# Check if devices are online and have an api heartbeat
online_devices_uuid=()
while IFS= read -r line; do
  if [[ $line == *"true online"* ]]; then
    uuid=($line)
    online_devices_uuid+=(${uuid[0]})
  fi
done <fleet_devices.txt

# Check if device has pca963x RGB LED controller
> suspect_devices.txt || true

for uuid in ${online_devices_uuid[@]}; do
  (
    echo -e "UUID: $uuid, checking I2C for controller..."
    result=$(echo 'echo 0 > /sys/class/leds/pca963x\:blue/brightness; dmesg | grep "pca963x"; exit;' | balena ssh $uuid | tail -n +4)
    if [[ $result == *"failed"* ]]; then
      echo -e "This device has missing I2C controller\n"
      echo $uuid >> suspect_devices.txt
    fi
  ) &

  if [[ $(jobs -r -p | wc -l) -ge $NUM_PROC ]]; then
    # $NUM_PROC jobs are running, so wait here for jobs to finish.
    wait -n
  fi
done

wait


# Tag device
if [ $3 = "tag" ]; then
    online_device_ids=()
    while IFS= read -r line; do
        uuid=($line)
        id=$(jq -r --arg UUID "$uuid" '.d | .[] | .owns__device[] | select(.uuid | contains($UUID)) | "\(.id)"' <<< $fleet)
        echo -e "Tagging device with ID $id as a suspected device.\n"
        tagged=$(curl -X POST \
        "https://api.balena-cloud.com/v6/device_tag" \
        -H "Content-Type: application/json" \
        -H "Authorization: Bearer ${BALENA_FLEET_AUTH_TOKEN}" \
        --data '{
            "device": "'${id}'",
            "tag_key": "DEPOP",
            "value": "pca963x"
        }' \
        -s)
    done <suspect_devices.txt
fi

# Cleanup
rm fleet_devices.txt