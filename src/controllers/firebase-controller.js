'use strict';
import * as firebase from "firebase";
import PubSub from './../internals/pubsub';

const Emitter = require('events');

export default class FirebaseController extends Emitter {
  constructor() {
    super();
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyCxBWJTjZ822a_0bxGbTJV3F1dZoQVFo1w",
      authDomain: "reeflight-fb71e.firebaseapp.com",
      databaseURL: "https://reeflight-fb71e.firebaseio.com"
    };
    firebase.initializeApp(config);
    PubSub.publish('firebase.ready', true);
  }
};
