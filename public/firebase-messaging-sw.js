// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
	apiKey: "AIzaSyBrWo0DjvnmMcP25bFmkuS37LdgeQ9_vAk",
	authDomain: "planet-destroyer-afa60.firebaseapp.com",
	projectId: "planet-destroyer-afa60",
	storageBucket: "planet-destroyer-afa60.appspot.com",
	messagingSenderId: "996645222406",
	appId: "1:996645222406:web:f041c76ac812a818522b87"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
	console.log('Received background message ', payload);

	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
	};

	self.registration.showNotification(notificationTitle,
		notificationOptions);
});
