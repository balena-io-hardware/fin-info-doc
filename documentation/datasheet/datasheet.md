![Fin logo](https://github.com/balena-io/balena-fin/raw/master/documentation/manual/pictures/fin_logo.png)

| **Document Type** | Datasheet |
| --- | --- |
| **Product ID:** | BLNFN100001 (20173009) |
| **Product Name** | BalenaFin |
| **Document Version** | 0.0.4 |
| **Author** | Carlo Maria Curinga |
| **State (Draft/Proposed/Approved)** | Proposed |

## Revision history

| **Date (dd/mm/yyyy)** | **Version** | **Author** | **Description** |
| --- | --- | --- | --- |
| 24/05/2018 | 0.0.1 | Carlo Maria Curinga | First draft |
| 15/06/2018 | 0.0.2 | Carlo Maria Curinga | First release |
| 26/06/2018 | 0.0.3 | Carlo Maria Curinga | Fixed voltage range in section 2 |
| 31/07/2018 | 0.0.4 | Carlo Maria Curinga | Updated device mapping images |

# 1. Introduction

BalenaFin is a carrier board for the Raspberry Pi Compute Module 3 Lite produced by the Raspberry Pi Foundation. For more informations about the Raspberry Pi Compute Module 3 Lite please refer to the following links:

Datasheet:

[https://www.raspberrypi.org/documentation/hardware/computemodule/datasheet.md](https://www.raspberrypi.org/documentation/hardware/computemodule/datasheet.md)

Schematics:

[https://www.raspberrypi.org/documentation/hardware/computemodule/schematics.md](https://www.raspberrypi.org/documentation/hardware/computemodule/schematics.md)

# 2. Availability and Support

BalenaFin (current version or a compatible later revision) availability is guaranteed until at least to January 2023

# 3. BalenaFin images and mapping

![Fin mapping top](https://github.com/balena-io/balena-fin/raw/master/documentation/manual/pictures/mapping_top.png)

![Fin mapping bottom](https://github.com/balena-io/balena-fin/raw/master/documentation/manual/pictures/mapping_bottom.png)

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
| 22 | DBG - Programming port | micro-USB connector that allows to flash the eMMC from a host computer using [balenaEtcher](balena.io/etcher) or usbboot. If the device is powered on while there is a cable connected to this port, it will enter a programming mode exposing its eMMC as mass-storage to a host computer (via balenaEtcher or usbboot) |
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

# 4. Block diagram

![Fin block diagram](https://github.com/balena-io/balena-fin/raw/master/documentation/datasheet/pictures/fin_block_diagram.png)

# 5. Mechanical specifications (mm)

![Fin mechanical top](https://github.com/balena-io/balena-fin/raw/master/documentation/datasheet/pictures/fin_mechanical_top.png)

![Fin mechanical bottom](https://github.com/balena-io/balena-fin/raw/master/documentation/datasheet/pictures/fin_mechanical_bottom.png)

# 6. General specifications

| **Parameter** | **Minimum** | **Typical** | **Maximum** | **Conditions** |
| --- | --- | --- | --- | --- |
| Power input via power connectors | 6V | - | 24V | 12.5W |
| Power input via HAT connector | 5V | 5V | 5V | 12.5W |
| Operation temperature | -25 celsius | - | 70 celsius |   |


# 7. Radio specifications

| **Parameter** | **Description** | **Min.** | **Typ.** | **Max.** | **Unit** |
| --- | --- | --- | --- | --- | --- |
| Frequency range | 11b / g / n (HT20/HT40) | 2412 | - | 2472 | MHz |
| 11a / ac (HT80) | 5180 | - | 5825 | MHz |
| BT / BLE (main) | 2402 | - | 2480 | MHz |
| BT / BLE (secondary, co-processor) | 2400 | - | 2483.5 | MHz |
| TX Output Power | 11b/11g/11n-2G(20TH/40TH) | 10 / 10 / 10 | 12 / 12 / 12 | 14/ 14/ 14 | dBm |
| 11a/11n-5G20TH/40TH/11ac | 10 / 10 / 8 / 6 | 12 / 12 / 10 / 8 | 14 / 14 / 12 / 10 | dBm |
| BT / BLE (main) | -6 | 0 | 4 | dBm |
| BT / BLE (secondary, co-processor) | -26 | - | 8 | dBm |
| RX Sensitivity | 11b/11g/11n-2G(20TH/40TH) | - | -87/-73/-69/-66 | -76 / -65 / -64/-61 | dBm |
| 11a/11n-5G(20TH/40TH)/11ac | - | -71/-68/-65/-57 | -65 / -64/-61 /-51 | dBm |
| BT / BLE (main) | - | -86/-86 | -70 / -70 | dBm |
| BT / BLE (secondary, co-processor) | - | -55.2/-47.2 | - | dBm |


# 8. Certification

| **Certification** | **Country / Region** | **Identifier(s)** |
| --- | --- | --- |
| CE | Europe | RE-18071303 |
| FCC | USA | 2APW6BLN-FN-1-00001 |
| IC | Canada | 24038-BLNFN100001 |
| MIC | Japan | R-208-180131 |
| RCM | Australia | _ongoing_ |
| OFCA | Hong Kong | _ongoing_ |

# 9. Labelling

The end product must be labeled, in a visible area, with the following:

- _Contains FCC ID: 2APW6BLN-FN-1-00001 IC: 24038-BLNFN100001_
- _Contains FCC ID: QOQBGM111 IC: 5123A-BGM111_

# Regulatory Insert

### Compliance and Regulatory Statements FCC Compliance Statement (USA)

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
