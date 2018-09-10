
![Fin logo](https://github.com/resin-io/balena-fin/raw/master/documentation/manual/pictures/fin_logo.png)

| **Document Type** | User Manual |
| --- | --- |
| **Device revision:** | Balena\_fin\_1.0.0 (20173009) |
| **Document Version** | 0.13.0 |
| **Author** | Carlo Maria Curinga |
| **State (Draft/Proposed/Approved)** | Proposed |

# Specs

| **Main processor** | Raspberry Pi Compute Module 3 Lite - BCM2837 quad-core ARM Cortex A53 (ArmV8) at 1.2GHz |
| --- | --- |
| **RAM ( Main processor )** | 1GB |
| **Memory ( Main processor )** | 8/16/32/64 GB eMMC 5.1 |
| **Co-processor** | Artik020 - 32-bit ARM® Cortex M4 core at 40 MHz |
| **RAM ( Co-processor )** | 32 kB |
| **Memory ( Co-processor )** | 256 kB |
| **Radio connectivity ( Main processor )** | 802.11ac/a/b/g/n 2.4 &amp; 5GHz WiFi + Bluetooth 4.2 |
| **Radio connectivity ( Co-processor )** | Bluetooth 4.2 Smart |
| **I/O ( Main Processor )** | Raspberry Pi 40-pin HAT |
| **I/O ( Co-processor )** | I2C, SPI, UART, GPIO, ADC |
| **Deep Sleep State management** | The Main processor, along with its interfaces, can be programmatically shut down and spawned back up via the co-processor, which can access the RTC chip when the main processor is OFF for time-based operations |
| **USB** | 2 x 2.0 Type-A |
| **PCI** | Mini PCI Express subset socket (USB, UART and I2C with nano-SIM card reader) |
| **Power** | 6 to 24V (5V @2.5A via HAT) |
| **RTC** | Via I2C chip, with dedicated coin-cell Battery ( positive polarity of battery facing upwards ) |
| **Ethernet** | 1 x 10/100 RJ45 |
| **MIPI** | 1 x Raspberry Pi camera connector1 x Raspberry Pi display connector |
| **HDMI** | 1 x HDMI Type A with CEC |
| **User feedback** | 1 x RGB LED, 9 x Status LEDs |
| **Temperature range** | -25 to 70 celsius degrees |

# Device mapping

![Fin mapping top](https://github.com/resin-io/balena-fin/raw/master/documentation/manual/pictures/mapping_top.png)

![Fin mapping bottom](https://github.com/resin-io/balena-fin/raw/master/documentation/manual/pictures/mapping_bottom.png)

| **#** | **Name** | **Notes/Description** |
| --- | --- | --- |
| 1 | 5V Status LED | Indicates 5V current flow. |
| 2 | 3V3 Status LED | Indicates 3.3V current flow. This is the same as the red LED on the Raspberry Pi 3 Model B |
| 3 | ACT Status LED | CM3L Activity LED. This is the same as the green LED on the Raspberry Pi 3 Model B |
| 4 | SPD Status LED | Ethernet Speed LED. off when in 10-Mbps mode, on when in 100-Mbps mode |
| 5 | FDX Status LED | Ethernet Full-Duplex indicator |
| 6 | LNK Status LED | Ethernet Link/Activity LED. |
| 7 | PAN Status LED | If supported by the mPCIE (32) card connected, indicates PAN network activity |
| 8 | LAN Status LED | If supported by the mPCIE (32) card connected, indicates LAN network activity |
| 9 | WAN Status LED | If supported by the mPCIE (32) card connected, indicates WAN network activity |
| 10 | DSI connector | Standard full-size Raspberry Pi Display connector |
| 11 | HDMI | Full-size HDMI Type A with CEC support |
| 12 | CSI connector | Standard full-size Raspberry Pi Camera connector |
| 13 | HAT connector | 40-pin Raspberry Pi HAT (Hardware Attached on Top) standard connector |
| 14 | WiFi/BT combo chip | 802.11ac/a/b/g/n 2.4 &amp; 5GHz WiFi + Bluetooth 4.2 |
| 15 | WiFi/BT uFL antenna connector | If the RF switch is set on the external position, the antenna attached to this connector will become the main Radio antenna for the WiFi/BT combo chip (14) |
| 16 | WiFi/BT embedded antenna | Embedded high-performance SMD antenna covering both 2.4 and 5GHz frequencies. It is the default antenna selected for the WiFi/BT combo chip (14) |
| 17 | Co-processor | Artik020 MCU |
| 18 | USB1 ON Status LED | The green LED stays on as long as there is enough current flowing on the top USB port. When this LED is off, it means a fault or under-voltage is happening on the top USB port |
| 19 | USB | 2 x USB Type-A |
| 20 | USB2 ON Status LED | The green LED stays on as long as there is enough current flowing on the bottom USB port. When this LED is off, it means a fault or under-voltage is happening on the bottom USB port |
| 21 | Ethernet | 10/100 ethernet RJ45 connector |
| 22 | DBG - Programming port | micro-USB connector that allows to flash the eMMC from a host computer using etcher.io or usbboot. If the device is powered on while there is a cable connected to this port, it will enter a programming mode exposing its eMMC as mass-storage to a host computer (via etcher.io or usbboot) |
| 23 | 2-POS Phoenix connector | 6-24V input power. This is a Industry standard connector. _Use either this or the Barrel Jack connector (24) - never both at the same time!_ |
| 24 | 2.1 / 5.5 mm Barrel Jack connector | 6-24V input power. _Use either this or the Phoenix connector (23) - never both at the same time!_ |
| 25 | Co-Processor I/O connector | 8 x GPIO / ADC, 1 x SPI, 1 x I2C, 1 x Debug UART |
| 26 | CR122 RTC coin-cell battery socket | This allows the embedded RTC to keep track of time while the device is powered off. |
| 27 | RGB LED |   |
| 28 | RESET push-button | When pressed (and released) DS1307 reboots the CM3L (30) |
| 29 | nano-SIM socket | This allows the use of a wide portfolio of cellular Modems via the mPCIE socket (32) |
| 30 | CM3L socket | SODIMM-200 socket for the Raspberry Pi Compute Module 3 Lite |
| 31 | eMMC | 8/16/32/64 GB class 5.1 industrial eMMC - main storage for the CM3L (30). Positioned under the CM3L (30) |
| 32 | mPCIE | Mini PCI express socket |
| 33 | Antenna switch | 2 position switch - when set to OFF, the WiFi/BT combo chip (14) uses the WiFi/BT embedded antenna (16). When set to ON, the WiFi/BT combo chip (14) uses the WiFi/BT uFL antenna connector (15) |

# Assembly &amp; Set up

Raspberry Pi Compute Module

Place the SODIMM-200 Raspberry Pi Compute Module in the dedicated socket on the rear of the board (for visual reference, see device mapping, 30). Make sure the two side clips are gripping the module on its dedicated half-circular holes.

RTC coin-cell battery

Place the coin-cell battery in its socket (mapping 26) with the positive polarity side facing upwards.

Mini PCI express

The balena Fin comes with two nylon press-fit elements pre-mounted for full-size mini PCI express modules. Just slide the module in the connector and press it so that its holes fit the nylon elements. You can remove or reposition them for half-sized mini PCI express by pressing the tip with a pliers and pull from the other side. Then just press it back in its new position until the tip is secured on the other end

External Antenna

You can attach an external antenna on the uFL socket (mapping 15). In order to enable the external antenna, you also need to slide the physical switch (mapping 33) to the ON position

Power

You can power the balena Fin from either a 5.5/2.1mm Barrel Jack (mapping 24) with positive polarity on the middle element or the Phoenix connector (mapping 23). The negative polarity of the Phoenix connector is labeled on the PCB with a "-" symbol. You can also power the balena Fin from the 5V pins exposed by the HAT connector, 2.5A are required as per the HAT specification.

# Developer Instructions

## Flashing CM3L on Balena Fin

The balena Fin supports the Raspberry Pi Compute Module 3 **lite** (CM3L).

"Lite" means that the module itself has the eMMC socket unpopulated and the traces are exposed via SODIMM-200. This is very important since the standard CM3 has a fixed 4GB eMMC. Instead, with the CM3L, the balena Fin can expose variable storage sizes via its embedded eMMC wired to the CM3L via the SODIMM-200 pins.

_NOTE: Any recent OS distribution (2018+) for the Raspberry Pi 3 Model B should be compatible with the balena Fin. This includes Raspbian and resinOS 2.x targeting the "Balena Fin" device-type._

The Raspberry Pi Foundation provides a tool that allows the Compute Module to expose the eMMC as a mass storage device that can be flashed like any other media. We implemented this feature directly in Etcher by developing our own native nodeJS implementation, which is currently up to 3 times faster. This feature is available on [E](https://etcher.io/)[tcher](https://etcher.io/)starting from version 1.2.1 for OSX and Windows (Windows still needs the Raspberry Pi Foundation [usbboot](https://github.com/raspberrypi/usbboot/blob/master/win32/rpiboot_setup.exe) drivers installed, but we are working on integrating the drivers into Etcher in an upcoming release).

_If you want to use the tool provided by the Raspberry Pi Foundation instead, please follow their instructions_ [_here_](https://www.raspberrypi.org/documentation/hardware/computemodule/cm-emmc-flashing.md)_._

Once you have everything set up on your computer, run Etcher on your computer, connect your balena Fin via CM3L Debug port (22) and power it from the POWER IN port (12).

_NOTE: a CM3L module needs to be inserted in the balena Fin!_

After a couple of seconds, the balena Fin eMMC should be detected on your computer by Etcher, which will initialize and list the board as a Compute Module based device (the name might change in the future). Proceed as usual, select the image you want to write, and press the "Flash!" button.

![Etcher enumerating the Balena Fin](https://github.com/resin-io/balena-fin/raw/master/documentation/manual/pictures/etcher_usbboot.png)

After flash is complete, power off your balena Fin and unplug the DEBUG micro-USB cable. Powering the balena Fin on will now result in the device booting from the freshly-written eMMC.

_NOTE: On managed resinOS, if you configured networking correctly on the resin.io dashboard while downloading the image to flash, this is the point when the device provisions and shows up in your application dashboard. If the device fails to connect to the configured WiFi SSID, the usual 4-blinks pattern will be shown on the ACT status LED_

## Installing specific Hardware support

**Generic instructions for raspbian 2018-06-27 or later:**

- Copy [this](https://drive.google.com/open?id=1IitHX78mQX1CHV98Dj15sqhv4akNMPYE)file in the boot partition

_You can access the boot partition of your balena Fin by simply attaching it to your computer with the DBG micro USB cable, power it up and open Etcher. It will detect and mount the partition for you!_

- Add the following line to your config.txt

        dtoverlay=balena-fin

- Put [this file](https://drive.google.com/open?id=1wQTOvX4vS_mrkl6iSbfFqycAFdAK-pr2) in /lib/firmware/mrvl/ and reboot ( this is the wifi+BT firmware. A more elegant way of adding it, is to add stretch-backports to your sources and then install it via apt-get update &amp;&amp; apt-get install firmware-libertas )

**resinOS / resin.io instructions:**

- Download the Balena Fin (CM3) device type image (on resin.io, create a Balena Fin (CM3) application first):

![Fin device type on resin.io](https://github.com/resin-io/balena-fin/raw/master/documentation/manual/pictures/fin_device_type.png)

- Flash and boot your device.

## Programming Artik020 on Balena Fin

The Artik020 SWDIO interface is exposed to the CM3L via a FTDI FT2232H-56Q JTAG USB controller. This means that the Artik020 can be flashed from the CM3L via, for example, openOCD. A reference can be found [here](https://github.com/resin-io-modules/FT2232H-56Q-openocd).

_NOTE: A firmata-based firmware and client library is under development. This will allow users to easily interact with the co-processor from the CM3L without needing to write their own firmware._

## Using the RTC from CM3L

The balena Fin sports a very common I2C RTC module that is well known, supported, and documented within the Raspberry Pi ecosystem: the **DS1307.**

There are plenty of guides on how to interact with the chip, including the following:

- [https://learn.adafruit.com/adding-a-real-time-clock-to-raspberry-pi/set-rtc-time](https://learn.adafruit.com/adding-a-real-time-clock-to-raspberry-pi/set-rtc-time)
- [https://thepihut.com/blogs/raspberry-pi-tutorials/17209332-adding-a-real-time-clock-to-your-raspberry-pi](https://thepihut.com/blogs/raspberry-pi-tutorials/17209332-adding-a-real-time-clock-to-your-raspberry-pi)

## Controlling the RGB LED

- `echo 504 > /sys/class/gpio/export # (Red)`
- `echo 505 > /sys/class/gpio/export # (Green)`
- `echo 506 > /sys/class/gpio/export # (Blue)`
- `echo "out" > /sys/class/gpio/gpio504/direction`
- `echo "out" > /sys/class/gpio/gpio505/direction`
- `echo "out" > /sys/class/gpio/gpio506/direction`

Now that you have the 3 GPIO LED pins ready, you can define your target color by setting each LED to high or low. For example, to turn the RGB off:

- `echo 0 > /sys/class/gpio/gpio504/value`
- `echo 0 > /sys/class/gpio/gpio505/value`
- `echo 0 > /sys/class/gpio/gpio506/value`

## Toggling the Status LED bank

This device sports 9 status LEDs varying from power, eMMC, ethernet, WiFi, WAN, etc. There is a switch which allows users to toggle them all on and off via software.

- `echo 511 > /sys/class/gpio/export`
- `echo "out" > /sys/class/gpio/gpio511/direction`
- `echo 0 > /sys/class/gpio/gpio511/value # turn off`
- `echo 1 > /sys/class/gpio/gpio511/value # turn on`

## Cellular via mPCIe card

We are working on identifying and documenting cards known to work out of the box on the board. If you plan on adding LTE capability to the device, we suggest the Quectel EC20EA-MINIPCIE: the card is known to work out of the box, hence only APN configuration is required. On ResinOS (2.0.0+) you do so by adding a NetworkManager profile in the boot partition under the "system-connections" folder. You can find more info about this on our docs at:[https://docs.resin.io/deployment/network/2.0.0/#cellular-modem-setup](https://docs.resin.io/deployment/network/2.0.0/#cellular-modem-setup).

![Fin bottom with mPCIe modem](https://github.com/resin-io/balena-fin/raw/master/documentation/manual/pictures/fin_bottom_modem.jpg)

Disabling RF activity on mPCIe radio cards

- `echo 508 > /sys/class/gpio/export`
- `echo "out" > /sys/class/gpio/gpio508/direction`
- `echo 1 > /sys/class/gpio/gpio508/value # mPCIe on`
- `echo 0 > /sys/class/gpio/gpio508/value # mPCIe off`

Disabling HDMI

- `echo 507 > /sys/class/gpio/export`
- `echo "out" > /sys/class/gpio/gpio507/direction`
- `echo 1 > /sys/class/gpio/gpio507/value # HDMI off`
- `echo 0 > /sys/class/gpio/gpio507/value # HDMI on`

## Power saving

- Turn off HDMI when not required
- Turn off the STATUS LEDs bank
- Programmatically disable RF activity on mPCIe when not required (assumes a cellular modem is being used)
- Programmatically power on and off the CM3L when not required via the co-processor PIN PC9 (5V interface) and PIN PF5 (3.3V interface). This is the equivalent of unplugging power from the Raspberry Pi

_NOTE: A firmata-based firmware and client library is under development. This will allow users to easily interact with the co-processor from the CM3L without needing to write their own firmware._

# Embedding the Balena Fin in products

## Labelling

The end product must be labeled, in a visible area, with the following:

- _Contains FCC ID: 2APW6BLN-FN-1-00001 IC: 24038-BLNFN100001_
- _Contains FCC ID: QOQBGM111 IC: 5123A-BGM111_

# Regulatory Insert

## Compliance and Regulatory Statements FCC Compliance Statement (USA)

This device complies with Part 15 rules. Operation is subject to the following two conditions:

**1.** This device may not cause harmful interference, and

**2.** This device must accept any interference received, including interference that may cause undesired operation.

**Note:** This equipment has been tested and found to comply with the limits for a Class A digital device, pursuant to part 15 of the FCC Rules. These limits are designed to provide reasonable protection against harmful interference when the equipment is operated in a commercial environment. This equipment generates, uses, and can radiate radio frequency energy and, if not installed and used in accordance with the instruction manual, may cause harmful interference to radio communications. Operation of this equipment in a residential area is likely to cause harmful interference in which case the user will be required to correct the interference at his own expense.

**Non-modification Warning**

Any changes or modifications to this device not expressly approved by the party responsible for compliance could void the user's authority to operate this equipment.

**RF Exposure Statement**

This equipment complies with FCC/IC radiation exposure limits set forth for an uncontrolled environment and meets the FCC radio frequency (RF) Exposure Guidelines and RSS-102 of the IC radiofrequency (RF) Exposure rules. This equipment should be installed and operated keeping the radiator at least 20cm or more away from person's body.

Cet équipement est conforme aux limites d'exposition aux rayonnements énoncées pour un environnement non contrôlé et respecte les règles les radioélectriques (RF) de la FCC lignes directrices d'exposition dans et d'exposition aux fréquences radioélectriques (RF) CNR-102 de l'IC. Cet équipement doitêtre installé et utilisé en gardant une distance de 20 cm ou plus entre le dispositif rayonnant et le corps

**Note** : This equipment has been tested and found to comply with the limits for a Class B digital device, pursuant to part 15 of the FCC Rules. These limits are designed to provide reasonable protection against harmful interference in a residential installation. This equipment generates, uses and can radiate radio frequency energy and, if not installed and used in accordance with the instructions, may cause harmful interference to radio communications. However, there is no guarantee that interference will not occur in a particular installation. If this equipment does cause harmful interference to radio or television reception, which can be determined by turning the equipment off and on, the user is encouraged to try to correct the interference by one or more of the following measures:

- Reorient or relocate the receiving antenna.
- Increase the separation between the equipment and receiver.
- Connect the equipment into an outlet on a circuit different from that to which the receiver is connected.
- Consult the dealer or an experienced radio/TV technician for help.

**Canadian DOC Compliance Statement**

Cet appareil numerique de la classe B est conforme a la norme NMB-003 du Canada. This Class B digital apparatus complies with Canadian ICES-003.

**Industry Canada (IC) Warning**

Le present appareil est conforme aux CNR d Industrie Canada applicables aux appareils radio exempts de licence. L exploitation est autorisee aux deux conditions suivantes : (1) appareil ne doit pas produire de brouillage, et (2) l utilisateur de l appareil doit accepter tout brouillage radioelectrique subi, meme si le brouillage est susceptible n compromettre le fonctionnement.

This device complies with Industry Canada license-exempt RSS standard(s). Operation is subject to the following two conditions: 1) This device may not cause interference., 2) This device must accept any interference, including interference that may cause undesired operation of the device.
