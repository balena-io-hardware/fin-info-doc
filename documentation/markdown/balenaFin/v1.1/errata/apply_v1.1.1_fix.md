# Hardware components modifications

| Reference (symbol) | Old MPN/value | New MPN/value | Notes |
| ------------- |-------------|-------------|------|
| R116 | 47K | 1K | same package and characteristics except for resistance value |
| R32 | 47K | 1K | same package and characteristics except for resistance value |

*TBD: add picture with position highlight for both symbols*

for both symbols, the process requires de-soldering of the old value component and soldering of the new value one. Package is 0402 so at least the following instruments must be used to ensure the outcome:

* precision solder iron with SMD thin tip
* third-hand
* LED illuminated lens arm

# Post-processing modifications

## 1. Version silkscreen cover

__1.1__ apply a `v1.1.1` sticker over the silkscreen that says `v1.1.0`

<img width="964" alt="Version silkscreen on device PCB highlight" src="./pictures/Fin-BRD-008-version-silkscreen.jpg">

## 2. Post processing programming

__2.1__ plug the Compute Module into the Device Under Test CM3L Socket (from now on, DUT).

<img width="964" alt="QRcode on device PCB highlight" src="./pictures/balena3.jpg">

__2.2__ connect the DUT to the provided QA instrument.

<img width="964" alt="QRcode on device PCB highlight" src="./pictures/Fin-BRD-008-qrcode.jpg">

__2.3__ scan the device QRcode with the QA instrument's scanner. wait for the instrument LED to blink purple (first testing flash), then white (testing), then purple again (retail flashing).

*TBD: add picture of the QA rig in processing mode*

__2.4__ at the QA Instrument URL a graphical user interface will provide QRcode information for the DUT. Use `v10ToV11 serial` for the full QRCODE string and `v10ToV11 uid` for the text.

<img width="964" alt="balenaFin QA GUI" src="./pictures/Fin-QA-GUI.jpg">

__2.5__ print a new QRcode with the updated content.

__2.6__ when the instrument has completed the process, it will output on its LED and __the status card of the graphical user interface__ the result color code: 

* If GREEN, apply replacement QRcode sticker, package and stock the DUT. 

* If RED, stock the DUT in the `QA KO` container

* If YELLOW, device has been selected for a random sampling thermal test, and needs to be re-tested in heat chamber with temperature from ambient to 70 celsius (see paragraph 3 for more info)

*TBD: add picture of the QA rig in completion mode, one per cases (OK/KO/THERMAL)*

## 3. Random sampling thermal test

When the result of a test is YELLOW, it means the DUT has been picked for additional testing in heat chamber.
    
__3.1__ Simply repeat the procedure of chapter 2 but with the DUT in the heat chamber set to raise from ambient temperature to 70 celsius. 

__3.2__ The heat chamber QA instrument will keep its LED GREEN during the test and will switch to RED if the test fails. Test is considered complete when the chamber reaches 70 celsius. 

__3.3__ Refer to the test result handling as per chapter 2.