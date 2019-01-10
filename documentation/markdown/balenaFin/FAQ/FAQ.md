<center>

![Fin logo](../../assets/balenaFin_logo.png)

| **Document Type** | FAQ |
| --- | --- |
| **Product ID:** | BLNFN100001 (20173009) |
| **Product Name** | BalenaFin |
| **Product Version** | 1.0.0 |
| **Document Version** | 1.0.0 |
| **Author** | Carlo Maria Curinga |
| **State (Draft/Proposed/Approved)** | Proposed |

</center>

## Revision history

<center>

| **Date (dd/mm/yyyy)** | **Version** | **Author** | **Description** |
| --- | --- | --- | --- |
| 10/01/2019 | 0.0.1 | Carlo Maria Curinga | First release |

</center>

Impact Definition: each erratum is marked with an impact, as defined below:

- Minor: workaround exists.
- Major: errata that do not conform to the data sheet or standard.
- Information: the device behavior is not ideal but acceptable. Typically, the data sheet will be
changed to match the device behavior.

<div class="page-break"></div>

## FAQ

## Is Balena Fin compatible with the Raspberry Pi Compute Module with integrated eMMC (CM1, CM3) ?
No. Balena Fin is only compatible with the eMMC-less Raspberry Pi compute modules (aka `lite`)

## Is Balena Fin compatible with standard rasbian or its derivates?
It will boot, but some peripherials won't work without some minor modification:

* WiFi+BT: while the `balena-fin` device tree overlay is merged upstream, you still need to set in in your `config.txt` ( `dtoverlay=balena-fin` ). You also need to compile and install the drivers, a process we are working on simplifying. In the meantime, we can provide you guidance on how to do it yourself
* RTC (Real Time Clock): while the `balena-fin` device tree overlay is merged upstream, you still need to set in in your `config.txt` ( `dtoverlay=balena-fin` ).
* RGB LED: while the `balena-fin` device tree overlay is merged upstream, you still need to set in in your `config.txt` ( `dtoverlay=balena-fin` ).
* miniPCIe airplane mode switch GPIO: while the `balena-fin` device tree overlay is merged upstream, you still need to set in in your `config.txt` ( `dtoverlay=balena-fin` ).
* DSI and CSI connectors (camera and display) + automatic HAT identification over I2C: As per the standard Raspberry Pi Foundation design (dt-blob.bin section of https://www.raspberrypi.org/documentation/hardware/computemodule/cm-peri-sw-guide.md ) you need to add the Balena Fin [dt-blob.bin](https://github.com/resin-io/balena-fin/raw/master/software/dt-blob/dt-blob.bin) in the root of the boot partition

## Is Balena Fin HAT compliant?
Yes it is, including power over HAT (5V @2.5A)

## Can I deploy Balena Fin in my Raspberry Pi 3 resin.io application?
Yes, we support mixed fleet https://resin.io/blog/evolve-your-fleet-manage-multiple-device-types-in-one-application/

## Does the RTC always run on its battery?
No - the RTC only runs on its battery when the device is powered off. This means that the real battery lifetime is way longer than the nominal one.

## How can I power Balena Fin?
You can power the board from the DC 5.5/2.1mm barrel jack connector or the 2 position phoenix connector with any input voltage between 6 and 24V with at least 12.5W (that is 12V @1A for example). You can also power Balena Fin from its 5V HAT pins with 5V @2.5A

## I cannot see any wireless interface listed, wifi does not work
Please make sure you have the `balena-fin` device tree overlay set in in your `config.txt` ( `dtoverlay=balena-fin` ).

## My HAT does not work on the Balena Fin unless I manually set up things that are automatic on a Raspberry Pi 3
Please make sure you have the Balena Fin [dt-blob.bin](https://github.com/resin-io/balena-fin/raw/master/software/dt-blob/dt-blob.bin) in the root of the boot partition

## Raspberry Pi camera or display don't work on my Balena Fin
Please make sure you have the Balena Fin [dt-blob.bin](https://github.com/resin-io/balena-fin/raw/master/software/dt-blob/dt-blob.bin) in the root of the boot partition

## WiFi signal is very weak
Please make sure you have the antenna switch on the right position based on your setup (OFF for internal antenna, ON for external antenna)

## My Balena Fin is heating a lot while running my application
The thermal performance of the Raspberry Pi Compute Module 3 Lite ( aka CM3L ) on Balena Fin has been benchmarked against the reference IO carrier board reference design from the Raspberry Pi Foundation and the Raspberry Pi 3 model B. IF your application does GPU intensive logic we suggest adding an heatsink to the SoC of the CM3L (the ones for the Raspberry Pi 3 model B are compatible)
