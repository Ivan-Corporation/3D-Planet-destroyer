// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
	apiKey: "AIzaSyDJnJfRO7xSRz6Np7ODDubyBS23er_xSWY",
	authDomain: "d-planet-destroyer.firebaseapp.com",
	projectId: "d-planet-destroyer",
	storageBucket: "d-planet-destroyer.appspot.com",
	messagingSenderId: "80201482298",
	appId: "1:80201482298:web:2c72c6267e15ce3569b503"
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
