importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');


firebase.initializeApp({
  'messagingSenderId': '33349838765'
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(payload => {
    const title = payload.title;
    const options = {
        body: payload.body,
        icon: payload.icon
    };

    self.registration.showNotification(title, options);
});