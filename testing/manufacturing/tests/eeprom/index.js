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

const { delay } = require("bluebird");

module.exports = {
    title: "EEPROM Test",
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

        let getEEPROMContainerID = async () => {
            return this.context
                .get()
                .worker.executeCommandInHostOS(
                    ['balena', 'ps', '-qf', 'name=eeprom'].join(' '),
                    this.context.get().link
                );
        };

        const ip = await this.context.get()
            .worker.ip(this.context.get().link);

        // Ensure we only push and run the eeprom container once
        if (!await getEEPROMContainerID()) {
            test.comment('Running eeprom in container');
            const state = await this.context.get()
                .worker.pushContainerToDUT(ip, __dirname, 'eeprom');
            test.comment(state);
        }

        let parseEEPROMdata = async (serial) => {
            let data = {};
            switch (serial.length) {
                case 20:
                    data = {
                        schema: 0,
                        hardwareRevision: parseInt(serial.substr(0, 2)),
                        batchSerial: parseInt(serial.substr(2, 5)),
                        week: parseInt(serial.substr(7, 2)),
                        year: parseInt(serial.substr(9, 2)),
                        pcbaLot: serial.substr(11, 9),
                        RAW: serial,
                    };
                    return data;
                case 21:
                    data = {
                        schema: parseInt(serial.substr(0, 1)),
                        hardwareRevision: parseInt(serial.substr(1, 2)),
                        batchSerial: parseInt(serial.substr(3, 5)),
                        week: parseInt(serial.substr(8, 2)),
                        year: parseInt(serial.substr(10, 2)),
                        pcbaLot: serial.substr(12, 9),
                        RAW: serial
                    };
                    return data;
                default:
                    throw new Error(`bad serial: ${serial}`);
            }
        };

        let getEEPROMdata = async () => {
            return this.context
                .get()
                .worker.executeCommandInContainer(
                    ['ethtool', '-e', 'eth0', 'offset', '0x27', 'length', '21', 'raw', 'on'].join(' '),
                    'eeprom',
                    this.context.get().link
                );
        };

        const serialData = await getEEPROMdata();
        test.doesNotThrow(() => {
            const parsedData = await parseEEPROMdata(serialData)
            test.comment(parsedData);
        });

    },
};
