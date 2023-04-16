import { initializeApp } from "firebase/app";
import {
	GoogleAuthProvider,
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
	updateCurrentUser,
	updateProfile,
} from "firebase/auth";

import {
	getFirestore,
	query,
	getDocs,
	collection,
	where,
	addDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDMCqMR2ecJFfk4hSKP-1D2_5RJUh9iJWo",
	authDomain: "local-link-8d60c.firebaseapp.com",
	projectId: "local-link-8d60c",
	storageBucket: "local-link-8d60c.appspot.com",
	messagingSenderId: "65132188995",
	appId: "1:65132188995:web:7593738b6b471754390bf6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const login = async (email, password) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
		return true;
	} catch (err) {
		console.error(err);
		return false;
	}
};

const register = async (name, email, password) => {
	try {
		console.log("in regsiter function");
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const user = res.user;

		if (auth.currentUser !== null) {
			await updateProfile(auth.currentUser, {
				displayName: name,
			});
		}
		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
};

const forgotPassword = async (email) => {
	try {
		await sendPasswordResetEmail(auth, email);
		alert("Password reset link sent! Check spam if you don't see it");
	} catch (err) {
		alert("Invalid Email");
	}
};

const logout = () => {
	signOut(auth);
};

export { auth, db, login, register, forgotPassword, logout };
