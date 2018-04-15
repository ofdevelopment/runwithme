import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCrir1XK7FdgQ-CDQqulZtKD6sKsrFvvDQ",
    authDomain: "runwithme-935f9.firebaseapp.com",
    databaseURL: "https://runwithme-935f9.firebaseio.com",
    projectId: "runwithme-935f9",
    storageBucket: "runwithme-935f9.appspot.com",
    messagingSenderId: "378186569513"
};

const fire = firebase.initializeApp(config);
export default fire;