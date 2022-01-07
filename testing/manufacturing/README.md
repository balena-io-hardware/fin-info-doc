# Manufacturing Tests

This directory contains the information regarding the provisioning and testing used in balenaFin manufacturing (v1.1.x).

The tests should be performed using the [leviathan](https://github.com/balena-io/leviathan) test framework and performed using a hardware test rig as specified in the [rig assembly guide](docs/ASSEMBLY.md).

## Installation & Setup

These tests run against the leviathan framework and thus need to be deploy using testbot hardware.

The following is an example `config.js` file used to set up the testbots.

```js
module.exports = {
    deviceType: "fin-cm3",
    suite: `${__dirname}/../suites/os`,
    config: {
        networkWired: true,
        networkWireless: true,
        downloadVersion: 'latest',
        interactiveTests: false,
        balenaApiKey: process.env.BALENACLOUD_API_KEY,
        balenaApiUrl: 'balena-cloud.com',
        organization: process.env.BALENACLOUD_ORG
    },
    image: `false`,
    workers: ['testbot.local'],
};
```

`BALENACLOUD_API_KEY` and `BALENACLOUD_ORG` should be set to the corresponding balenaCloud user's API key and the organisation that the fleet belongs to.


## Post-Manufacturing Steps

As a post-manufacturing step, the balenaFin is configured to write its manufacturing serial number to an internal EEPROM, flash its coprocessor and check that it can boot and connect to balenaCloud in provisioning application.

### Writing the Manufacturing Serial Number to EEPROM

Each manufactured balenaFin has a 21 character manufacturing serial number.
This number is encoded on a QR code sticker that is placed on the top surface of the balenaFin and should also be written to an internal EEPROM on the balenaFin following the manufacturing process.

The serial number is composed as follows:

```json
// Manufacturing Serial Number
raw = "1100038129192019-0355"

// Encoding Schema
schema = {
    schema: [0],
    hardwareRevision: [1:2],
    batchSerial: [3:7],
    week: [8:9],
    year: [10:11],
    pcbaLot: [12:20],
};

// Actual Data
data = {
    schema: 1,
    hardwareRevision: 10,
    batchSerial: 00381,
    week: 29,
    year: 19,
    pcbaLot: 2019-0355,
};
```

Where the `pcbaLot` refers to the PCB manufacturer's batch number (useful for debugging PCB issues).

### Flashing the Coprocessor

The coprocessor is flashed with bootloader and [firmata](https://github.com/balena-io-hardware/balena-fin-coprocessor-firmata) binary to test that the compute module can communicate with the coprocessor via UART.

## Quality Control

Upon completion of the provisioning process, the balenaFin is subjected to a number of quality control (QC) tests to verify the manufacturing process and to flag any issues concerning functionality.

### [Power](tests/power)

The balenaFin is expected to function when supplied a voltage between 6V and 24V.
The DUT should boot and respond when this voltage range is applied.

### [EEPROM](tests/eeprom)

The balenaFin is expected to have its internal EEPROM written to with a valid manufacturing serial number.
This number should match the sticker and be parsed by a test.

### [Coprocessor](tests/coprocessor)

The balenaFin's coprocessor is expected to be functional and able to communicate with the compute module after manufacturing.
It should respond to firmata commands via UART from compute module.

### [Ethernet](tests/ethernet)

### [wifi](tests/wifi)

### [i2c](tests/i2c)

### [RGB LED](tests/rgbled)
