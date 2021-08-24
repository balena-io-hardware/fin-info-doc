#!/bin/env node

const led = require(__dirname + '/libs/led.js');
const chalk = require('chalk');
const colors = [
  "red",
  "yellow",
  "purple",
  "green",
  "cyan",
  "white",
  "blue"
];

let loop = setInterval(function() {
  "use strict";
  setTimeout(function() {
    led.color(colors[Math.floor(Math.random()*colors.length)])
      .then((color) => {
        console.log(chalk.cyan("turning RGB LED " + chalk.underline(color)));
      });
  }, 1000);
}, 2000);
