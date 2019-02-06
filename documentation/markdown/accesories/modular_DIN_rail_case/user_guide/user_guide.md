<center>

![Fin logo](../../../assets/balenaFin_logo.png)

| **Document Type** | User Guide |
| --- | --- |
| **Product ID:** | FIN00028 (v2) |
| **Product Name** | Modular DIN-rail Case |
| **Document Version** | 0.0.1 |
| **Author** | Nicolas Tzovanis |
| **State (Draft/Proposed/Approved)** | Draft |

</center>

## Revision history

<center>

| **Date (dd/mm/yyyy)** | **Version** | **Author** | **Description** |
| --- | --- | --- | --- |
| 24/05/2018 | 0.0.1 | Nicolas Tzovanis | First release |

</center>

<div class="page-break"></div>

# 1. Introduction

The modular DIN-rail case is the official case for the balenaFin. It exposes mosts ports to the outside through panel mount connectors. The modular ring-based design of the case allows the use of Hardware Attached on Top (HAT) modules without the need of designing a case from scratch.
In order to expose most of the balenaFin internal ports, we designed two versions of the case:

### Standard version

This version exposes the basic balenaFin ports:
- 2 x USB
- Ethernet (RJ45)
- HDMI
- Barrel jack power connector
- 2 x External antenna mounting points

### Phoenix Ring version

In addition to the standard version, the Phoenix ring version has a second ring with a 15 position phoenix connector that exposes pins from the balenaFin HAT connectos and from the balenaFin co-processor. See the datasheet for the pinout. 


Both versions provide DIN-rail and VESA mounting on the bottom of the case.


# 2. What's in the box?

## 2.1 No phoenix ring version

- Modular DIN-rail Case for balenaFin (bottom, balenaFin ring and lid)
- Din rail clip
- M3x8mm self-tapping screw
- DC-099 5.5 x 2.1mm DC Power Jack panel mount
- 3 x M3x20mm self-tapping screws

![Fin block diagram](./pictures/standard_components.jpg)

## 2.2 Phoenix ring version

- Modular DIN-rail Case for balenaFin (bottom, balenaFin ring, phoenix ring and lid)
- Din rail clip
- M3x8mm self-tapping screw
- DC-099 5.5 x 2.1mm DC Panel Power Jack 
- 3 x M3x38mm self-tapping screws
- 15-POS female phoenix panel mount
- 15-POS ribbon cable
- Phoenix ring HAT board

![Fin block diagram](./pictures/phoenix_components.jpg)

# 3. Assembly instructions

## 3.1 Attaching the balenaFin 

**Items needed**
- balenaFin board
- M3 x 8mm screw
- Case bottom

**Instructions**
- Place the bottom part of the case on the table.
- Locate the blind boss. It's the hole with the thinest plastic walls.

![Fin block diagram](./pictures/3_1_a.jpg)

- Place the balenaFin (compute module facing down) so that the hole closest to the HAT header aligns with the blind boss.
- Use the M3 x 8mm screw to fix the balenaFin to the case in the blind boss.

![Fin block diagram](./pictures/3_1_b.jpg)

Note: make sure the balenaFin is properly secure without overtighetning the screw to avoid breaking the plastic boss.

## 3.2 Assembling the rings

**Items needed**
- Assembly from step 3.1
- balenaFin ring
- Phoenix ring (only if assembling the phoenix ring version)
- Phoenix ring HAT board


**Instructions**
- Place the balenaFin ring on top of the assembly from step 3.1. Make sure the openings align and the missing boss of the ring aligns with the blind boss from step 3.1
- Connect the pre-assembled DC Panel Power Jack to the balenaFin.

![Fin block diagram](./pictures/3_2_a.jpg)

__Only if using phoenix ring version__
- Connect the Phoenix ring HAT board to the balenaFin.
- Place the phoenix ring on top, making sure the missing boss of the ring aligns with the missing boss from the balenaFin ring.
- Connect the 15-POS ribbon cable to the phoenix ring HAT board.

![Fin block diagram](./pictures/3_2_b.jpg)

## 3.3  Final assembly

**Items needed**
- Assembly from step 3.2
- Case lid
- 3 x M3x20mm self-tapping screws
- 3 x M3x38mm self-tapping screws (only if assembling the phoenix ring version)

**Instructions**

- Place the lid on top of the assembly from step 3.2. Make sure the light pipe from the lid aligns with the RGB LED on the balenaFin.

![Fin block diagram](./pictures/3_3_a.jpg)

![Fin block diagram](./pictures/3_3_b.jpg)

- Flip the whole assembly upside down to expose the bottom part of the case.

__Only if using standard version__
- Secure the assembly with the M3x20mm self-tapping screws.

__Only if using phoenix ring version__
- Secure the assembly with the M3x38mm self-tapping screws.

![Fin block diagram](./pictures/3_3_c.jpg)