# balena-fin-examples
A collection of examples for balenaFin wrapped as a multi-container balenaCloud application. 
This collection will be improved with more examples over time, make sure to check it out from time to time!

[![deploy button](https://balena.io/deploy.svg)](https://dashboard.balena-cloud.com/deploy?repoUrl=https://github.com/balena-io-hardware/balena-fin-examples&defaultDeviceType=fincm3)

Service | What it does
------------ | ------------
wifi-connect | if the balenaFin is not connected, exposes a WiFi access point with Captive Portal ( SSID: `balenaFin`, PSK: `balenaFin`) that allows the configuration of WiFi credentials. 
For more info, please refer to the [wifi-connect repository](https://github.com/balena-io/wifi-connect)
rgb-led | blinks the balenaFin RGB LED with a random color every 3 seconds
artik020 | Loads OTA bluetooth bootloader to the Artik020 module and a sample application with BLE characteristics and the possibility to use OTA updates

## How to deploy this example to balenaCloud via git

```bash
git clone git@github.com:balena-io/balena-fin-examples.git
git remote add balena <YOUR_BALENA_USERNAME>@git.balena-cloud.com:<YOUR_BALENA_USERNAME>/<YOUR_BALENA_APP_NAME>.git
git push balena master
```
## How to deploy this example to balenaCloud via the balena CLI

1. Install [balena-cli](https://github.com/balena-io/balena-cli#standalone-install)
2. Deploy this application via [balena push](https://github.com/balena-io/balena-cli/blob/master/doc/cli.markdown#push-applicationordevice)
