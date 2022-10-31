// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
	apiKey: "AIzaSyBrXn3J89Y9JF1tw3VPFyNhT7HrhahZrNc",
	authDomain: "react-pwa-notifications.firebaseapp.com",
	projectId: "react-pwa-notifications",
	storageBucket: "react-pwa-notifications.appspot.com",
	messagingSenderId: "1056053279505",
	appId: "1:1056053279505:web:e004512e8f89e5f527aab0"
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
