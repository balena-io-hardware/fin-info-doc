## Is Balena Fin compatible with the Raspberry Pi Compute Module with integrated eMMC (CM1, CM3) ?
No. Balena Fin is only compatible with the eMMC-less Raspberry Pi compute modules (aka `lite`)

## Is Balena Fin compatible with standard rasbian or its derivates?
It will boot, but some peripherials won't work without some minor modification:

* WiFi+BT: while the `balena-fin` device tree overlay is merged upstream, you still need to set in in your `config.txt` ( `dtoverlay=balena-fin` ). You also need to compile and install the drivers, a process we are working on simplifying. In the meantime, we can provide you guidance on how to do it yourself
* RTC (Real Time Clock): while the `balena-fin` device tree overlay is merged upstream, you still need to set in in your `config.txt` ( `dtoverlay=balena-fin` ).
* RGB LED: while the `balena-fin` device tree overlay is merged upstream, you still need to set in in your `config.txt` ( `dtoverlay=balena-fin` ).
* miniPCIe airplane mode switch GPIO: while the `balena-fin` device tree overlay is merged upstream, you still need to set in in your `config.txt` ( `dtoverlay=balena-fin` ).

## Is Balena Fin HAT compliant?
Yes it is, including power over HAT (5V @2.5A)

## Can I deploy Balena Fin in my Raspberry Pi 3 resin.io application?
Yes, we support mixed fleet https://resin.io/blog/evolve-your-fleet-manage-multiple-device-types-in-one-application/

## Does the RTC always run on its battery?
No - the RTC only runs on its battery when the device is powered off. This means that the real battery lifetime is way longer than the nominal one.

## How can I power Balena Fin?

You can power the board from the DC 5.5/2.1mm barrel jack connector or the 2 position phoenix connector with any input voltage between 6 and 24V with at least 12.5W (that is 12V @1A for example). You can also power Balena Fin from its 5V HAT pins with 5V @2.5A
