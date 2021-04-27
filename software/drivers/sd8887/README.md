# SD8887 Driver and Firmware

### Information

This directory contains the source and instructions for building the wireless drivers/firmware for the sd8887 radio on the balenaFin (v1.x). The latest release of this driver is version `15.68.19.p48-15.26.19.p48` which targets the 5.4 Linux kernel.

This driver comes pre-installed under balenaOS and our custom Raspbian image for the balenaFin. The instructions below explain how to install both the driver and firmware against a standard Raspbian Lite (Stretch) image.

## Installation for Raspbian

We provide a pre-prepared [Raspbian Lite (Stretch)]() image with overlay and drivers installed, however we also provide instructions for how to install these drivers on a vanilla version of Raspbian OS. 

> :warning: Currently this driver only supports up to the 5.4 kernel. This means the driver does not support the latest version of Raspberry Pi OS (previously known as Raspbian) but we are working on it!


### Setup

1. Install latest [Raspbian Lite (Stretch)](https://downloads.raspberrypi.org/raspbian/images/raspbian-2019-04-09/2019-04-08-raspbian-stretch.zip) onto your balenaFin (v1.x). We recommend using [Etcher](https://www.balena.io/etcher/).

2. Enable `ssh` (create an `ssh` file in the `/boot` partition). 

3. Ensure that the `balena-fin` DT overlay has been set in `/boot/config.txt`. This should be included by default in the vanilla Raspbian image.

```bash
dtoverlay=balena-fin
```

4. Update, upgrade and install dependencies:
```bash 
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install raspberrypi-kernel-headers build-essential bc git
```

5. Clone this repo and copy source
```bash
git clone https://github.com/balena-io-hardware/balena-fin.git
sudo cp balena-fin/software/drivers/sd8887/firmware/* /lib/firmware/nxp/
```

6. Create `/etc/modprobe.d/blacklist.conf` using the following snippet:

```bash
for mod in mwifiex mwifiex_sdio btmrvl btmrvl_sdio; do
    echo "blacklist ${mod}" >> /etc/modprobe.d/blacklist.conf
done
```

7. Reboot
 
```bash
sudo reboot now
```

### Configure NetworkManager and WiFi Connect

The WiFi Connect installation script will enable NetworkManager and install wifi-connect:

```bash
bash <(curl -L https://github.com/balena-os/wifi-connect/raw/master/scripts/raspbian-install.sh)
```

### Build WLAN driver

```bash
cd ~/balena-fin/software/drivers/sd8887/src/wlan
make -j 4 KERNELDIR=/usr/src/linux-headers-$(uname -r) build
cd ../bin_sd8887/
sudo modprobe cfg80211
sudo insmod mlan.ko
sudo insmod sd8887.ko cal_data_cfg=none drv_mode=1 sta_name=wlan ps_mode=2
```

### Verify WLAN driver is working

```bash
dmesg
sudo nmcli d wifi rescan ifname wlan0
nmcli d wifi
iw phy
iw dev
ip a
sudo wifi-connect -i wlan0
```

### Unload WLAN driver

```bash
sudo ip link set wlan0 down
sudo rmmod sd8xxx mlan
```

### Build Bluetooth driver

```bash
cd ~/balena-fin/software/drivers/sd8887/src/bluetooth
make -j 4 KERNELDIR=/usr/src/linux-headers-$(uname -r) build
cd ../bin_sd8887_bt/
sudo modprobe bluetooth
sudo insmod bt8887.ko
```

### Verify Bluetooth driver is working

```bash
sudo bluetoothctl
```

### Unload Bluetooth driver

```bash
sudo hciconfig hciX down
sudo rmmod bt8xxx
```

### Complete installation

```bash
sudo cp ~/balena-fin/software/drivers/sd8887/src/bin_sd8887/mlan.ko /lib/modules/$(uname -r)/kernel/drivers/net/wireless/nxp/mlan.ko
sudo cp ~/balena-fin/software/drivers/sd8887/src/bin_sd8887/sd8887.ko /lib/modules/$(uname -r)/kernel/drivers/net/wireless/nxp/sd8887.ko
sudo cp ~/balena-fin/software/drivers/sd8887/src/bin_sd8887_bt/bt8887.ko /lib/modules/$(uname -r)/kernel/drivers/bluetooth
sudo depmod
sudo touch /etc/modules-load.d/sd8887-nxp.conf
```

Edit `/etc/modules-load.d/sd8887-nxp.conf` like this:

```bash
mlan
sd8xxx
bt8xxx
```

Create and edit `/etc/modprobe.d/sd8887-nxp.conf` like this:

```bash
options sd8xxx cal_data_cfg=none drv_mode=1 sta_name=wlan ps_mode=2
```