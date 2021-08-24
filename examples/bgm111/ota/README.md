# Artik020 example

Sample code to load an application to the Artik020 module present on the balenaFin.

Note: this code only works with the balenaFin versions that contain the FTDI chip (HW v8 or older at the moment).  

## Contents

The firmware directory contains two files that are loaded in the Artik020 flash memory via the FTDI chip.

`bootloader-storage-internal-ble-combined.s37` is the OTA bootloader. Supports BLE OTA updates.

`soc-example.hex` is a simple example with BLE characteristics and supports putting the module in OTA mode.

## Further development

To develop custom applications for the Artik020 module it is recommended to download Simplicity Studio from Silicon labs website.

Notes:
- Make Sure you use EFR32BG1B232F256GM48 as the part number for the Artik020 module
- Make sure you use version 2.8 or newer of the `Gecko SDK Suite: Bluetooth`
