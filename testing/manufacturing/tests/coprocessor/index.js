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

'use strict';

const request = require('request-promise');
const SUPERVISOR_PORT = 48484;
const fs = require('fs');

module.exports = {
    title: 'coprocessor tests',
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
    tests: [
        {
            title: 'flashing test',
            run: async function (test) {
                let ip = await this.worker.ip(this.link);
                let targetState
            },
            title: 'firmata test',
            run: async function (test) {
                let ip = await this.worker.ip(this.link);
                let targetState
            }
        }
    ]
}