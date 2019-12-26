import firebase from 'firebase';

// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyCamYFS8aUErk4O6pq0HnaUqZqQ95uSYd4",
    authDomain: "login-4ff9d.firebaseapp.com",
    databaseURL: "https://login-4ff9d.firebaseio.com",
    projectId: "login-4ff9d",
    storageBucket: "login-4ff9d.appspot.com",
    messagingSenderId: "763287540217",
    appId: "1:763287540217:web:860ff86ae25fc0a0612d28"
  };


  // Initialize Firebase
  const fire = firebase.initializeApp(config);

  export default fire;