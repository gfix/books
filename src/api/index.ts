import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyBFJe5YGzMSlfR_Zmd7e29GWFVjXqBiCpI',
    authDomain: 'books-b7f2d.firebaseapp.com',
    databaseURL: 'https://books-b7f2d.firebaseio.com',
    projectId: 'books-b7f2d',
    storageBucket: 'books-b7f2d.appspot.com',
    messagingSenderId: '15375796782'
};

firebase.initializeApp(firebaseConfig);

const API = {
    FIREBASE: firebase
};

export { API };