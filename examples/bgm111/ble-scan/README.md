# BLE Scan Example

Sample code to scan for advertising BLE devices and output the names of the advertisements over serial UART.

Note: this code only works with the balenaFin version v1.0.

## Contents

The firmware directory contains two files that are loaded in the Coprocessor's flash memory during set up.

`bootloader.s37` is the coprocessor bootloader. If this has not been flashed to the device beforehand, this will need to be flashed.

`ble-scan.hex` is an example that scans for advertising devices and shares them over serial UART.

To get started with this application, open the serial interface with `screen /dev/ttyUSB0 115200` and you should see the coprocessor printing out scanned BLE advertisements.

## Further Development

To develop custom applications for the coprocessor module it is recommended to download Simplicity Studio from Silicon labs website.
You can then uncompress the [ble-scan](/src/ble-scan.sls) file and import this into Simplicity Studio as a template project.

Notes:

- Make Sure you use EFR32BG1B232F256GM48 as the part number for the Artik020 module
- Make sure you use version 2.8 or newer of the `Gecko SDK Suite: Bluetooth`

### Documentation

To help aid further development here are some links to Silicon Labs documentation on the BLE SDK

- [BLE API Reference Manual](https://www.silabs.com/documents/public/reference-manuals/bluetooth-api-reference.pdf)
