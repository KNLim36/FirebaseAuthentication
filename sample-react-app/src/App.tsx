import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    Firestore,
} from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDO-M6Cu-kN-caj5ND5kgwj5dmTJwKjkWI",
    authDomain: "sampleauthentication-ebe43.firebaseapp.com",
    projectId: "sampleauthentication-ebe43",
    storageBucket: "sampleauthentication-ebe43.appspot.com",
    messagingSenderId: "553280167447",
    appId: "1:553280167447:web:8bbb20803c1a4c971d4652",
    measurementId: "G-VE1EQTHR53",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db: Firestore) {
    const citiesCol = collection(db, "cities");
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    return cityList;
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
