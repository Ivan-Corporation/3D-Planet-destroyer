import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

var firebaseConfig = {
	apiKey: "AIzaSyBrXn3J89Y9JF1tw3VPFyNhT7HrhahZrNc",
	authDomain: "react-pwa-notifications.firebaseapp.com",
	projectId: "react-pwa-notifications",
	storageBucket: "react-pwa-notifications.appspot.com",
	messagingSenderId: "1056053279505",
	appId: "1:1056053279505:web:e004512e8f89e5f527aab0"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const fetchToken = (setTokenFound) => {
	return getToken(messaging, { vapidKey: 'BElA6FvAGEIlcou60g4A8kC26Oxc2fYWtja0rbaV7niEf6s9gp6CvfCcMAIXS2aTzqmj5vkvtEV0ETe-hhRu0mQ' }).then((currentToken) => {
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