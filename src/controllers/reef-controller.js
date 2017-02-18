'use strict';
import FirebaseController from './firebase-controller.js';
import I2cController from './i2c-controller.js';
import PubSub from './../internals/pubsub';

export default class extends FirebaseController {
  constructor() {
    super();
    this.onFirebaseReady = this.onFirebaseReady.bind(this);
    PubSub.subscribe('firebase.ready', this.onFirebaseReady);
    
  }
  onFirebaseReady() {
   this.start(); 
  } 
  start() {
    firebase.database().ref('users/XpsE3FKDooeYDJwkxES9JLG8BPZ2/channel').on('value', snapshot => {
      const data = snapshot.val();
      I2cController(data);
    });
  }

};
