'use strict';

var firebase$1 = require('firebase');

const Emitter = require('events');

class FirebaseController extends Emitter {
  constructor() {
    super();
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyCxBWJTjZ822a_0bxGbTJV3F1dZoQVFo1w",
      authDomain: "reeflight-fb71e.firebaseapp.com",
      databaseURL: "https://reeflight-fb71e.firebaseio.com"
    };
    firebase$1.initializeApp(config);
    this.emit('firebase-ready');
  }

}

var I2cController = class {
  constructor() {
    const i2c = require('i2c');
    let address = 0x10; // set address to 0x10
    let wire = new i2c(address, {device: '/dev/i2c-1'});


  }
  write(byte) {
    wire.writeByte(byte, err => {
      console.log("error is ", err);
    });
  }
};

var ReefController = class extends FirebaseController {
  constructor() {
    super();
    super.on('firebase-ready', () => {
console.log('e');
      this.start();
    });
    
  }
  start() {
    firebase.database().ref('users/XpsE3FKDooeYDJwkxES9JLG8BPZ2/channel').on('value', snapshot => {
      const data = snapshot.val();
      I2cController(data);
    });
  }
};

new ReefController();
