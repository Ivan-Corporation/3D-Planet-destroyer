import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

var firebaseConfig = {
	apiKey: "AIzaSyBrWo0DjvnmMcP25bFmkuS37LdgeQ9_vAk",
	authDomain: "planet-destroyer-afa60.firebaseapp.com",
	projectId: "planet-destroyer-afa60",
	storageBucket: "planet-destroyer-afa60.appspot.com",
	messagingSenderId: "996645222406",
	appId: "1:996645222406:web:f041c76ac812a818522b87"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const fetchToken = (setTokenFound) => {
	return getToken(messaging, { vapidKey: 'BBEd5zoGBAvFAPPW4mYhgSawRe_6V5Ox7sQP38-Oz4rT8vZ0dqc6jmE-8Pbn4uaF-K4SjBzo00IOKvxXfx3b9Fc' }).then((currentToken) => {
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