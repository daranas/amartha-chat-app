import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCTw133Yc--gpsgLBjVYMFbWrq7jFFQWVs",
    authDomain: "amartha-chat-3631f.firebaseapp.com",
    databaseURL: "https://amartha-chat-3631f.firebaseio.com",
    projectId: "amartha-chat-3631f",
    storageBucket: "",
    messagingSenderId: "33349838765"
}

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const database = firebase.database();
export const firebaseAuth = firebase.auth;
export const messaging = firebase.messaging();