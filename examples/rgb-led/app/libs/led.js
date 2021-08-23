#!/bin/env node
{
  let self;

  const gi = require('node-gtk');
  Fin = gi.require('Fin', '0.2');
  const fin = new Fin.Client()
  const fs = require('fs');
  const Gpio = require('onoff').Gpio;
  const BALENA_FIN_REVISION = fin.revision;


  let rgb = function() {
    'use strict';
    if (!(this instanceof rgb)) return new rgb();
    self = this;
    var fin_version = '1.0';

    if (BALENA_FIN_REVISION >= '10') {
      fin_version = '1.1';
    }

    // First, figure out if we are running on a v1.0 or v1.1 balenaFin
    // The v1.0 has LEDs connected via GPIO, whereas the v1.1 has a PCA9633 LED controller IC
    console.log('balenaFin v'+fin_version+' detected');

    if (fin_version == '1.1') {
      console.log('Using I2C LED driver (balenaFin v1.1)');

      this.redPath = '/sys/class/leds/pca963x:red/brightness';
      this.greenPath = '/sys/class/leds/pca963x:green/brightness';
      this.bluePath = '/sys/class/leds/pca963x:blue/brightness';
    } else {
      console.log('Using direct GPIO-driven LEDs (balenaFin v1.0)');

      this.red = new Gpio(504, 'out');
      this.green = new Gpio(505, 'out');
      this.blue = new Gpio(506, 'out');
    }

    // Define how the requested colors will control each LED
    this.colors = {
      "red": [1, 0, 0],
      "yellow": [1, 1, 0],
      "purple": [1, 0, 1],
      "green": [0, 1, 0],
      "cyan": [0, 1, 1],
      "white": [1, 1, 1],
      "blue": [0, 0, 1],
      "black": [0, 0, 0],
    };

    this.color = function(color) {
      return new Promise((resolve, reject) => {
        if (self.colors.hasOwnProperty(color)) {
          self.reset();

          if (fin_version == '1.1') {
            fs.writeFileSync(self.redPath, self.colors[color][0]*255);
            fs.writeFileSync(self.greenPath, self.colors[color][1]*255);
            fs.writeFileSync(self.bluePath, self.colors[color][2]*255);
          } else {
            self.red.writeSync(self.colors[color][0]);
            self.green.writeSync(self.colors[color][1]);
            self.blue.writeSync(self.colors[color][2]);
          }

          resolve(color);
        } else {
          reject("The requested color:" + color + " is not supported.");
        }
      });
    };


    this.reset = function() {
      if (fin_version == '1.1') {
        fs.writeFileSync(self.redPath, 0);
        fs.writeFileSync(self.greenPath, 0);
        fs.writeFileSync(self.bluePath, 0);
      } else {
        self.red.writeSync(0);
        self.green.writeSync(0);
        self.blue.writeSync(0);
      }
    };

    // Initialise the LEDs off (black)
    this.color('black');
  };

  module.exports = rgb();
}
