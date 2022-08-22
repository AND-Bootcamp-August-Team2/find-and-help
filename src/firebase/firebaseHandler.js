import { getDatabase, ref, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCmTOVrc7dUkbtb1DzJoz_z9gxKBSt3aIY",
    authDomain: "find-and-help.firebaseapp.com",
    databaseURL: "https://find-and-help-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "find-and-help",
    appId: "1:287141668841:web:7931e202f8f469574a8d78"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const readOpportunities = () => {
    const db = getDatabase(app);
    const oppRef = ref(db, 'opportunities/');
    return onValue(oppRef, (snapshot) => {
        const data = snapshot.val();
        // return data
        //console.log(data)
    });
}