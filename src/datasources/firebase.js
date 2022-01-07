import firebase from 'firebase/app'
import 'firebase/firebase-database';
import 'firebase/storage';

const oFirebase = firebase.initializeApp({
    databaseURL: "https://pba-planner-default-rtdb.firebaseio.com",
    storageBucket: "pba-planner.appspot.com",
});

const oDB = oFirebase.database();

export const oTodosinDB = oDB.ref('todos');
export const oStorage = oFirebase.storage();