<center>

![Fin logo](./pictures/fin_logo.png)

| **Document Type** | Datasheet |
| --- | --- |
| **Product ID:** | BLNFN100001 (20173009) |
| **Product Name** | BalenaFin |
| **Product Description** | RaspberryPi CM3 carrier board |
| **Product Version** | 1.1.0 |
| **Manufacturer Part Number** | FIN0110-SX (where X is the storage size: 8/16/32/64) |
| **Document Version** | 0.0.8 |
| **Author** | Carlo Maria Curinga |
| **State (Draft/Proposed/Approved)** | Approved |

</center>

<div class="page-break"></div>

## Revision history

<center>

| **Date (dd/mm/yyyy)** | **Version** | **Author** | **Description** |
| --- | --- | --- | --- |
| 13/02/2019 | 0.0.1 | Carlo Curinga | First draft |
| 21/02/2019 | 0.0.2 | Carlo Curinga | First release |
| 22/02/2019 | 0.0.3 | Carlo Curinga | Update minimum temperature value |
| 06/06/2019 | 0.0.4 | Nicolas Tzovanis | Fixed HAT Header pinout for pin 13 |
| 24/06/2019 | 0.0.5 | Nicolas Tzovanis | Improved description of USB header |
| 26/06/2020 | 0.0.6 | Alex Bucknall | Added BGM111 Port Reference |
| 14/10/2021 | 0.0.7 | Nicolas Tzovanis | Added information for IEC report |
| 11/01/2022 | 0.0.8 | Alex Bucknall | Corrected balenaFin voltage range |
| 01/04/2022 | 0.0.9 | Konstantinos Mouzakis | Corrected coin cell battery type |

</center>

<div class="page-break"></div>

# 1. Introduction

The balenaFin is a carrier board for the Raspberry Pi Compute Module 3 Lite and Compute Module 3+ Lite[1] hardened for field deployment.
The balenaFin includes 8/16/32/64 GB of on-board industrial eMMC depending on the model, has dual-band connectivity for both 2.4 and 5GHz WiFi networks, can be connected to an external antenna for WiFi and Bluetooth, and can accept a wide range of DC power input via either the barrel jack or 2-position phoenix connector.
Low power mode and real time applications are supported through the integrated BGM111[2] microcontroller.

For more information about the Raspberry Pi Compute Module please refer to the following links:

* Datasheet: https://www.raspberrypi.org/documentation/hardware/computemodule/datasheet.md
* Schematics: https://www.raspberrypi.org/documentation/hardware/computemodule/schematics.md

<div class="page-break"></div>

# 2. Continuity of supply

Availability of balenaFin in either the current version or a compatible later revision is guaranteed, on commercially reasonable basis, until January 2024.

## 2.1 Ordering information  

| Part number | Description |
| --- | --- |
| FIN0110-S08 | 8GB on-board eMMC |
| FIN0110-S16 | 16GB on-board eMMC |
| FIN0110-S32 | 32GB on-board eMMC |
| FIN0110-S64 | 64GB on-board eMMC |

<div class="page-break"></div>

# 3. BalenaFin images and mapping

| Top | Bottom |
| :--------------------------------------------------------: | :--------------------------------------------------------------: |
| ![Fin mapping top](./pictures/mapping_top.png) | ![Fin mapping bottom](./pictures/mapping_bottom.png) |


| **#** | **Name** | **Notes/Description** |
| --- | --- | --- |
| 1 | 5V Status LED | Indicates 5V current flow |
| 2 | 3V3 Status LED | Indicates 3.3V current flow; this is the same as the red LED on the Raspberry Pi 3 Model B |
| 3 | ACT Status LED | CM3L Activity LED; this is the same as the green LED on the Raspberry Pi 3 Model B |
| 4 | SPD Status LED | Ethernet Speed LED; off when in 10-Mbps mode, on when in 100-Mbps mode |
| 5 | FDX Status LED | Ethernet Full-Duplex indicator |
| 6 | LNK Status LED | Ethernet Link/Activity LED |
| 7 | PAN Status LED | If supported by the mPCIE (32) card connected, indicates PAN network activity |
| 8 | LAN Status LED | If supported by the mPCIE (32) card connected, indicates LAN network activity |
| 9 | WAN Status LED | If supported by the mPCIE (32) card connected, indicates WAN network activity |
| 10 | DSI/CAM1 connector | Standard full-size Raspberry Pi MIPI connector that can be configured as Display or secondary Camera (cam1) connector; selection is made via the DSI/CAM1 switch (37) |
| 11 | HDMI | Full-size HDMI Type A with CEC support |
| 12 | CSI connector | Standard full-size Raspberry Pi Camera (cam0) connector |
| 13 | HAT connector | 40-pin Raspberry Pi HAT (Hardware Attached on Top) standard connector |
| 14 | WiFi/BT combo chip | 802.11ac/a/b/g/n 2.4 &amp; 5GHz WiFi + Bluetooth 4.2 |
| 15 | WiFi/BT uFL antenna connector | If the RF switch (33) is set on the external position, the antenna attached to this connector will become the main radio antenna for the WiFi/BT combo chip (14) |
| 16 | WiFi/BT embedded antenna | Embedded high-performance SMD antenna covering both 2.4 and 5GHz frequencies; it is the default antenna selected for the WiFi/BT combo chip (14) |
| 17 | Co-processor | Silicon Labs BGM111 MCU |
| 18 | USB1 ON Status LED | The green LED stays on as long as there is enough current flowing on the top USB port; when this LED is off, it means a fault or under-voltage is happening on the top USB port |
| 19 | USB | 2 x USB Type-A |
| 20 | USB2 ON Status LED | The green LED stays on as long as there is enough current flowing on the bottom USB port; when this LED is off, it means a fault or under-voltage is happening on the bottom USB port |
| 21 | Ethernet | 10/100 ethernet RJ45 connector |
| 22 | PRG port | micro-USB programming port). __balenaFin can only be booted into flash mode via this port__ |
| 23 | Phoenix power in | Industry standard 2-POS Phoenix type connector for 6-30V input power; polarity is denoted on PCB silkscreen |
| 24 | Barrel Jack power in |  2.1 / 5.5 mm barrel jack type connector for 6-30V input power. Positive polarity (Positive tip, Negative sleeve) - Denoted by symbol on the bottom PCB silkscreen.|
| 25 | Co-Processor I/O connector | 8 x GPIO / ADC, 1 x SPI, 1 x I2C, 1 x Debug UART |
| 26 | CR1225 RTC coin-cell battery socket | This allows the embedded RTC to keep track of time while the device is powered off |
| 27 | RGB LED | Connected to a PCA9633 controller that allows standard linux sysfs LED control |
| 28 | USB3 ON Status LED | The green LED stays on as long as there is enough current flowing on the 4-pin header USB port; when this LED is off, it means a fault or under-voltage is happening on the 4-pin header USB port |
| 29 | nano-SIM socket | This allows the use of a wide portfolio of cellular modems via the mPCIe socket (32) |
| 30 | CM3L socket | SODIMM-200 socket for the Raspberry Pi Compute Module 3/3+ Lite |
| 31 | eMMC | 8/16/32/64 GB class 5.1 industrial eMMC - main storage for the CM3L (30). Positioned under the CM3L (30) |
| 32 | mPCIe | Mini PCI Express socket |
| 33 | Antenna switch | Internal/external antenna selection switch |
| 34 | PoE HAT headers | exposes the incoming voltage from the RJ45 (21) port for PoE HATs |
| 35 | USB 2.0 4-pin header | Exposes a USB 2.0 interface via male pin headers. |
| 36 | GND probe interface | Exposes a GND probe interface for easy debugging |
| 37 | DSI/CAM1 switch | Switches the full-size Raspberry Pi MIPI connector (10) between Display or secondary Camera (cam1) mode |
| 38 | POWER IN Fuse (on 23 & 24) | 3A 125VAC/VDC fuse - MPN: 0154003.DR |
| 39 | HAT 5V Fuse | 3A 125VAC/VDC fuse - MPN: 0154003.DR |

### CSI/DSI selection switch [37]
Switches the full-size Raspberry Pi MIPI connector (10) between Display or secondary Camera (Cam1) mode.
When set to “DISP”, the full-size Raspberry Pi MIPI connector [10] will expose the DSI (Disp1) interface. When set to “CAM1” the full-size Raspberry Pi MIPI connector [10] will expose the secondary CSI (Cam1) interface

**WARNING:** Only use the switch when the balenaFin is completely powered off and no cables are connected.

### Internal/External antenna selection switch [33]
Switches the embedded WiFi/Bluetooth module [14] between the internal (PCB) and external antennas.
When set to “INT”, the WiFi/Bluetooth module will use the embedded (PCB) antenna. When set to "EXT”, the WiFi/Bluetooth module will use any antenna connected to the uFL connector [15]

**WARNING:** Only use the switch when the balenaFin is completely powered off and no cables are connected.

### PRG port [22]
This port is used to flash the on-board eMMC with a bootable image/OS. When a host is connected to the PRG port, the balenaFin will enter a flashing mode exposing its eMMC as mass-storage device.
More information on how to use the programming port can be found on the getting started guide at: https://www.balena.io/fin/1.1/docs/getting-started/

**Note:** The balenaFin can only be booted into flash mode via this port. When using the PRG port, make sure no other power cable is connected to either the Phoenix[23] nor the Barrel Jack [24] power ports.

### USB Header [35]
Standard 0.1” pin header exposing a 2.0 USB interface.

| Pin number | Name | Description |
| --- | --- | --- |
| 1 | VCC | +5V DC supply |
| 2 | D- | USB data - |
| 3 | D+ | USB data + |
| 4 | GND | Ground |

**Note:** Pin 1 is the one closest to the co-processor[17] and pin 4 is the one closest to the USB Type-A port [19].

### PoE header [34]
The PoE header is a standard 0.1” header that adds PoE support to the balenaFin via an external HAT. The balenaFin is compatible with all the PoE HATs that are compatible with the Raspberry Pi 3B+.

**Note:** some PoE HATs do not follow the official Raspberry Pi HAT specifications and might have components that collide with components on the balenaFin.

<div class="page-break"></div>

## 3.1 HAT connector pinout

| **Pin #** | **Name** | **Notes/Description** | **Pin #** | **Name** | **Notes/Description** |
| --- | --- | --- | --- | --- | --- |
| 1 | 3V3 | 3.3V rail, shared with CM      | 2 | 5V | 5V rail, from regulator |
| 3 | I2C1_SDA | Compute Module I2C1 Data  | 4 | 5V | 5V rail, from regulator |
| 5 | I2C1_SCL | Compute Module I2C1 Clock | 6 | GND | Ground |
| 7 | GPIO4 |  Compute Module GPIO_4       | 8 | GPIO14 | Compute Module GPIO_14 |
| 9 | GND | Ground                         | 10 | GPIO15 | Compute Module GPIO_15 |
| 11 | GPIO17 | Compute Module GPIO_17     | 12 | GPIO18 | Compute Module GPIO_18 |
| 13 | GPIO27 | Compute Module GPIO_27     | 14 | GND | Ground |
| 15 | GPIO22 | Compute Module GPIO_22     | 16 | GPIO23 | Compute Module GPIO_23 |
| 17 | 3V3 | 3.3V rail, shared with CM     | 18 | GPIO24 | Compute Module GPIO_24 |
| 19 | GPIO10 | Compute Module GPIO_10     | 20 | GND | Ground |
| 21 | GPIO9 |  Compute Module GPIO_9      | 22 | GPIO25 | Compute Module GPIO_25 |
| 23 | GPIO11 | Compute Module GPIO_11     | 24 | GPIO8 | Compute Module GPIO_8 |
| 25 | GND | Ground                        | 26 | GPIO7 | Compute Module GPIO_7 |
| 27 | I2C0_SDA | Compute Module I2C0 Data | 28 | I2C0_SCL | Compute Module I2C0 Clock |
| 29 | GPIO5 |  Compute Module GPIO_5      | 30 | GND | Ground |
| 31 | GPIO6 |  Compute Module GPIO_6      | 32 | GPIO12 | Compute Module GPIO_12 |
| 33 | GPIO13 | Compute Module GPIO_13     | 34 | GND | Ground |
| 35 | GPIO19 | Compute Module GPIO_19     | 36 | GPIO16 | Compute Module GPIO_16 |
| 37 | GPIO26 | Compute Module GPIO_26     | 38 | GPIO20 | Compute Module GPIO_20 |
| 39 | GND | Ground                        | 40 | GPIO21 | Compute Module GPIO_21 |  

<div class="page-break"></div>

## 3.2 Silicon Labs BGM111 connector pinout

| **Pin #** | **Name** | **BGM111**|  **Notes** |
| -- | --------- | ---- | -------------------------- |
| 1  | MCU_GPIO0 | PD14 | Co-processor GPIO_0        |
| 2  | 3V3       | 3V3  | 3.3V rail, from regulator |
| 3  | MCU_GPIO1 | PA2  | Co-processor GPIO_1        |
| 4  | SPI_MCU_CS-CON_EXT   | PB13 |                           |
| 5  | MCU_GPIO2 | PA3  | Co-processor GPIO_2        |
| 6  | SPI_MCU_CS-SCLK_EXT  | PC8  |                           |
| 7  | MCU_GPIO3 | PA4  | Co-processor GPIO_3        |
| 8  | SPI_MCU_CS-MOSI_EXT  | PC6  |                           |
| 9  | MCU_GPIO4 | PA5  | Co-processor GPIO_4        |
| 10 | SPI_MCU_CS-MISO_EXT  | PC7  |                           |
| 11 | MCU_GPIO5 | PB11 | Co-processor GPIO_5        |
| 12 | DBG_uP-RX_DEV-TX_EXT | PA1  |                           |
| 13 | MCU_GPIO6 | PF6  | Co-processor GPIO_6        |
| 14 | DBG_uP-TX_DEV-RX_EXT | PA0  |                           |
| 15 | MCU_GPIO7 | PF7  | Co-processor GPIO_7        |
| 16 | MCU_GPIO8            | PD15 | Co-processor GPIO_8       |
| 17 | GND       | GND  | Ground                     |
| 18 | MCU_GPIO9            | PD13 | Co-processor GPIO_9       |

<div class="page-break"></div>

### 3.2.1 Silicon Labs BGM111 internal pinout

| **Name**  | **BGM111**|  **Notes** |
| ---------------- | ---- | --------------------------------------------- |
| PW_ON_5V         | PC9  | 5V Power Rail for the Compute Module          |
| PW_ON_3V3       | PF5   | 3V3 Power Rail for the Compute Module         |
| SW_I2C_SDA_ON    | PC10 | Internal I2C1 SDA (shared with Compute Module) |
| SW_I2C_SCL_ON   | PC11  | Internal I2C1 SCL (shared with Compute Module) |
| ARTIK-TX_CM3-RX  | PF3  | BGM111 TX to Compute Module RX (UART)          |
| ARTIK-RX_CM3-TX | PF2   | BGM111 RX to Compute Module TX (UART)          |
| SWDIO_MCU        | PF1  | BGM111 Serial Wire Debug (IO)                 |
| SWCLK_MCU       | PF0   | BGM111 Serial Wire Debug (Clock)              |

<div class="page-break"></div>

# 4. Block diagram

![Fin block diagram](./pictures/fin_block_diagram.png)

<div class="page-break"></div>

# 5. Mechanical specifications (mm)

| Top | Bottom |
| :--------------------------------------------------------: | :--------------------------------------------------------------: |
| ![Fin mapping top](./pictures/fin_mechanical_top.png) | ![Fin mapping bottom](./pictures/fin_mechanical_bottom.png) |

<div class="page-break"></div>

# 6. General specifications

| **Parameter** | **Minimum** | **Typical** | **Maximum** | **Conditions** |
| --- | --- | --- | --- | --- |
| Power input via power connectors | 6V | - | 30V | 12.5W |
| Power input via HAT connector | 5V | 5V | 5V | 12.5W |
| Operation temperature | -25 celsius | - | 70 celsius |   |

**NOTE:** The board cannot be powered from the microUSB [PRG] port. This power input can only be used for flashing the internal eMMC.

<div class="page-break"></div>

# 7. Radio specifications

### 7.1 Frequency range

| **Description** | **Min.** | **Typ.** | **Max.** | **Unit** |
| --- | --- | --- | --- | --- |
| 11b / g / n (HT20/HT40) | 2412 | - | 2472 | MHz |
| 11a / ac (HT80) | 5180 | - | 5825 | MHz |
| BT / BLE (main) | 2402 | - | 2480 | MHz |
| BT / BLE (secondary, co-processor) | 2400 | - | 2483.5 | MHz |

### 7.2 TX Output Power

| **Description** | **Min.** | **Typ.** | **Max.** | **Unit** |
| --- | --- | --- | --- | --- |
| 11b/11g/11n-2G(20TH/40TH) | 10 / 10 / 10 | 12 / 12 / 12 | 14/ 14/ 14 | dBm |
| 11a/11n-5G20TH/40TH/11ac | 10 / 10 / 8 / 6 | 12 / 12 / 10 / 8 | 14 / 14 / 12 / 10 | dBm |
| BT / BLE (main) | -6 | 0 | 4 | dBm |
| BT / BLE (secondary, co-processor) | -26 | - | 8 | dBm |

### 7.3 RX Sensitivity

| **Description** | **Min.** | **Typ.** | **Max.** | **Unit** |
| --- | --- | --- | --- | --- |
| 11b/11g/11n-2G(20TH/40TH) | - | -87/-73/-69/-66 | -76 / -65 / -64/-61 | dBm |
| 11a/11n-5G(20TH/40TH)/11ac | - | -71/-68/-65/-57 | -65 / -64/-61 /-51 | dBm |
| BT / BLE (main) | - | -86/-86 | -70 / -70 | dBm |
| BT / BLE (secondary, co-processor) | - | -55.2/-47.2 | - | dBm |

<div class="page-break"></div>

# 8. Certification

| **Certification** | **Country / Region** | **Identifier(s)** |
| --- | --- | --- |
| RoHS | N/A | N/A |
| CE | Europe | RE-18071303 |
| FCC | USA | 2APW6-FIN0110-CM2 |
| IC | Canada | 24038-BLNFN100001 |
| MIC | Japan | R-208-180131 |

<div class="page-break"></div>

## 8.1 Labelling

The end product must be labeled, in a visible area, with the following:

- _Contains FCC ID: 2APW6-FIN0110-CM2 IC: 24038-BLNFN100001_
- _Contains FCC ID: QOQBGM111 IC: 5123A-BGM111_

<div class="page-break"></div>

## 8.2 Regulatory Insert

### 8.1.1 FCC Compliance Statement (USA)

This device complies with Part 15 rules. Operation is subject to the following two conditions:

**1.** This device may not cause harmful interference, and

**2.** This device must accept any interference received, including interference that may cause undesired operation.

**NOTE:** This equipment has been tested and found to comply with the limits for a Class B digital device, pursuant to part 15 of the FCC Rules. These limits are designed to provide reasonable protection against harmful interference when the equipment is operated in a commercial environment. This equipment generates, uses, and can radiate radio frequency energy and, if not installed and used in accordance with the instruction manual, may cause harmful interference to radio communications. Operation of this equipment in a residential area is likely to cause harmful interference in which case the user will be required to correct the interference at his own expense.

#### Non-modification Warning

Any changes or modifications to this device not expressly approved by the party responsible for compliance could void the user's authority to operate this equipment.

#### RF Exposure Statement

This equipment complies with FCC/IC radiation exposure limits set forth for an uncontrolled environment and meets the FCC radio frequency (RF) Exposure Guidelines and RSS-102 of the IC radiofrequency (RF) Exposure rules. This equipment should be installed and operated keeping the radiator at least 20cm or more away from person's body.

Cet équipement est conforme aux limites d'exposition aux rayonnements énoncées pour un environnement non contrôlé et respecte les règles les radioélectriques (RF) de la FCC lignes directrices d'exposition dans et d'exposition aux fréquences radioélectriques (RF) CNR-102 de l'IC. Cet équipement doitêtre installé et utilisé en gardant une distance de 20 cm ou plus entre le dispositif rayonnant et le corps

**NOTE:** This equipment has been tested and found to comply with the limits for a Class B digital device, pursuant to part 15 of the FCC Rules. These limits are designed to provide reasonable protection against harmful interference in a residential installation. This equipment generates, uses and can radiate radio frequency energy and, if not installed and used in accordance with the instructions, may cause harmful interference to radio communications. However, there is no guarantee that interference will not occur in a particular installation. If this equipment does cause harmful interference to radio or television reception, which can be determined by turning the equipment off and on, the user is encouraged to try to correct the interference by one or more of the following measures:

- Reorient or relocate the receiving antenna.
- Increase the separation between the equipment and receiver.
- Connect the equipment into an outlet on a circuit different from that to which the receiver is connected.
- Consult the dealer or an experienced radio/TV technician for help.

<div class="page-break"></div>

### 8.1.2 Canadian DOC Compliance Statement

Cet appareil numerique de la classe B est conforme a la norme NMB-003 du Canada. This Class B digital apparatus complies with Canadian ICES-003.

#### Industry Canada (IC) Warning

Le present appareil est conforme aux CNR d Industrie Canada applicables aux appareils radio exempts de licence. L exploitation est autorisee aux deux conditions suivantes : (1) appareil ne doit pas produire de brouillage, et (2) l utilisateur de l appareil doit accepter tout brouillage radioelectrique subi, meme si le brouillage est susceptible n compromettre le fonctionnement.

This device complies with Industry Canada license-exempt RSS standard(s). Operation is subject to the following two conditions: 1) This device may not cause interference., 2) This device must accept any interference, including interference that may cause undesired operation of the device.
