import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

var firebaseConfig = {
	apiKey: "AIzaSyDJnJfRO7xSRz6Np7ODDubyBS23er_xSWY",
	authDomain: "d-planet-destroyer.firebaseapp.com",
	projectId: "d-planet-destroyer",
	storageBucket: "d-planet-destroyer.appspot.com",
	messagingSenderId: "80201482298",
	appId: "1:80201482298:web:2c72c6267e15ce3569b503"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const fetchToken = (setTokenFound) => {
	return getToken(messaging, { vapidKey: 'BCxk_PUwLb1CpAfu-Dd6gCfftS6Pa3pIPABIUie-UG4nsEyE1MI8yrOLNuTlSnf48WdYXtc1aZiScaUwPsSXPyw' }).then((currentToken) => {
		if (currentToken) {
			console.log('current token for client: ', currentToken);
			setTokenFound(true);
			// Track the token -> client mapping, by sending to backend server
			// show on the UI that permission is secured
		} else {
			console.log('No registration token available. Request permission to generate one.');
			setTokenFound(false);
			// shows on the UI that permission is required 
		}
	}).catch((err) => {
		console.log('An error occurred while retrieving token. ', err);
		// catch error while creating client token
	});
}

export const onMessageListener = () =>
	new Promise((resolve) => {
		onMessage(messaging, (payload) => {
			resolve(payload);
		});
	});