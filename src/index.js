import * as firebase from 'firebase';

const moment = require('moment');

const config = {
    apiKey: "AIzaSyA37dJRaGpYOTVb0SfGK7_atWtGNjqB67c",
    authDomain: "oktorejjestobiad.firebaseapp.com",
    databaseURL: "https://oktorejjestobiad.firebaseio.com",
    projectId: "oktorejjestobiad",
    storageBucket: "oktorejjestobiad.appspot.com",
    messagingSenderId: "913002641856"
};

firebase.initializeApp(config);
const database = firebase.database();

database.ref('oktorejjestobiad/').set({
    lunchAt: moment().add(1, 'days').hour(12).minutes(0).seconds(0).milliseconds(0).unix(),
    foo: Math.random()
});