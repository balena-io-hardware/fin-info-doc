/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";

module.exports = {
  title: "i2c test suite",
  deviceType: {
    type: 'object',
    required: ['slug'],
    properties:
    {
      slug: {
        type: 'string',
        const: 'fincm3'
      }
    }
  },
  test: [
      {
        title: "i2c scan test",
        run: async function (test) {
            // check that i2c adapters are registered
            let result = await this.context
            .get()
            .worker.executeCommandInHostOS(
                'ls /sys/class/i2c-dev/',
                this.context.get().link,
            ); 
            let devices = (result.match(/i2c-/g) || []).length;
            test.is((devices >= 2), true, "Should see that at least 2 i2c adapters");
        },
      },
      {
        title: "IO expander test",
        run: async function (test) {
            let error = null;
            try {
                await this.context
                    .get()
                    .worker.executeCommandInHostOS(
                        'cat /sys/devices/platform/i2c*/i2c-*/*-0020/gpio/*/base',
                        this.context.get().link,
                    );
            } catch (e) {
                error = e; 
            }
            test.is(error, null, "Should be able to find base address of IO expander");
        },
      },
      {
        title: "RTC test",
        run: async function (test) {
            // check rtc is registered in kernel at boot
            let result = await this.context
            .get()
            .worker.executeCommandInHostOS(
                'dmesg | grep rtc',
                this.context.get().link,
            ); 
            let check = result.includes("registered as rtc");
            test.is(check, true, "Should see that rtc driver registered");

            // check hwclock can read time from rtc
            let error = null;
            try {
                const timestamp = await this.context
                    .get()
                    .worker.executeCommandInHostOS(
                        'hwclock',
                        this.context.get().link,
                    ); 
                test.comment(`Expected time: ${timestamp}`)
            }
            catch (e) {
                error = e; 
            }
            test.isNot(error, !null, "Should be able to return expected timestamp"); 
        },
      },
      {
        title: "RGB LED test",
        run: async function (test) {
            let error = null;
            try {
                // set all colors to min brightness
                await this.context
                    .get()
                    .worker.executeCommandInHostOS(
                        `for n in "red" "blue" "green"; do echo 0 > /sys/class/leds/pca963x\:$n/brightness && sleep 1; done`,
                        this.context.get().link,
                    ); 
                // set all colors to max brightness
                await this.context
                    .get()
                    .worker.executeCommandInHostOS(
                        `for n in "red" "blue" "green"; do echo 255 > /sys/class/leds/pca963x\:$n/brightness && sleep 1; done`,
                        this.context.get().link,
                    ); 
            }
            catch (e) {
                error = e; 
            }
            test.isNot(error, !null, "Should be able to control RGB LEDs"); 
        },
      }
    ]

};
