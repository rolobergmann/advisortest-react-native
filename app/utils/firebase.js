import firebase from "firebase/app";

const firebaseConfig = {   
        apiKey: "AIzaSyCtokWXwrTB4EK7aTdZKLH0Oe7ixzldMoE",
        authDomain: "witivegan.firebaseapp.com",
        projectId: "witivegan",
        storageBucket: "witivegan.appspot.com",
        messagingSenderId: "98151429355",
        appId: "1:98151429355:web:aebfde51b4a2e555737aae"
};
      
export const firebaseApp = firebase.initializeApp(firebaseConfig);