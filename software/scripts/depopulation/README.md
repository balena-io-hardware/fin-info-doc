# Depopulation Profile Identifier

Script to check depopulated balenaFin profiles for customers using I2C.

This specific example looks for the `pca963x` driver using I2C, attempts to set the blue led to 0 brightness and records the device UUID if the command succeeded or failed.

## Local Requirements

- bash
- curl
- jq
- balena-cli

## Usage

Sign into the balena-cli with authenticated credentials for the target fleet.
Run the script with the following command, where `$TAG` given with a value of "tag" is an optional arg to tag the devices in that fleet:

```bash
./scan.sh $YOUR_BALENA_API_AUTH_TOKEN $FLEET_ID $TAG
```

> You can find you `$FLEET_ID` from the url, for example `https://dashboard.balena-cloud.com/fleets/1234567`, where 1234567 is the `$FLEET_ID`.

The script will create a `suspect_devices.txt` file containing a list of the UUIDs of the devices with the missing I2C RGB LED controller.
Set `$NUM_PROC` in the script for the number of simultaneous processes to run.
This may help performance in large fleets.
