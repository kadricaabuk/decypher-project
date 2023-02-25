import firebase, {initializeApp} from '@react-native-firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBLdohLjCQXMoYwq-STO2BdR6EVcSa2TTI",
    authDomain: "decypher-project.firebaseapp.com",
    projectId: "decypher-project",
    storageBucket: "decypher-project.appspot.com",
    messagingSenderId: "577271821369",
    appId: "1:577271821369:web:1a1d7a9fd42ff086a649e8",
    measurementId: "G-G502EJ7L2N"
};
export const initializeFirebase = () => {
    if (!firebase.apps.length) {
       const app = initializeApp(firebaseConfig);
    } 
}