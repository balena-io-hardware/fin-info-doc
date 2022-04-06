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
    title: "Real Time Clock test",
    deviceType: {
        type: 'object',
        required: ['slug'],
        properties: {
            slug: {
                type: 'string',
                enum: [
                    'fincm3',
                ],
            },
        },
    },
    run: async function (test) {

        // check rtc is registered in kernel at boot
        const result = await this.context
            .get()
            .worker.executeCommandInHostOS(
                'dmesg | grep rtc',
                this.context.get().link,
            );
        const check = result.includes("registered as rtc");
        test.is(check, true, "Should see that rtc driver registered");

        // check hwclock returns a valid datetime
        const datetime = await this.context
            .get()
            .worker.executeCommandInHostOS(
                `hwclock -r`,
                this.context.get().link
            );

        test.not(isNaN(Date.parse(datetime)), true, `Datetime is ${datetime}. NaN is not expected.`);
    },
};
