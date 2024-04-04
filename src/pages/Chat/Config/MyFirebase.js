import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCHuRaJ-klEciXTEbFjbpvJ-zsXuVO5ffI',
  authDomain: 'bagginschat.firebaseapp.com',
  databaseURL: 'https://bagginschat.firebaseio.com',
  projectId: 'bagginschat',
  storageBucket: 'bagginschat.appspot.com',
  messagingSenderId: '591785438064'
};
firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true,
});

export const myFirebase = firebase;
export const myFirestore = firebase.firestore();
export const myStorage = firebase.storage();
