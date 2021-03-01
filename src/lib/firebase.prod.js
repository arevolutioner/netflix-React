  
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {seedDatabase} from '../seed';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyAg9yZR6Oj8rqttZrKD2R9eHikBxev5JEg",
    authDomain: "netflix-portfolio-69010.firebaseapp.com",
    projectId: "netflix-portfolio-69010",
    storageBucket: "netflix-portfolio-69010.appspot.com",
    messagingSenderId: "484263243941",
    appId: "1:484263243941:web:d903e14e2c1df1c54f9d4c"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };