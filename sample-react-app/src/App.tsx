import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { initializeApp } from "firebase/app";
// import {
//     getFirestore,
//     collection,
//     getDocs,
//     Firestore,
// } from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

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
const auth = getAuth(app);
// const db = getFirestore(app);
// const analytics = getAnalytics(app);
// const todosCol = collection(db, 'todos');

onAuthStateChanged(auth, (user) => {
    if (user !== null) {
        console.log("logged in!");
    } else {
        console.log("No user");
    }
});

// Get a list of cities from your database
// async function getCities(db: Firestore) {
//     const citiesCol = collection(db, "cities");
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map((doc) => doc.data());
//     return cityList;
// }

const signIn = () => {};

function App() {
    const [user, setUser] = useState({});

    // useEffect(() => {
    //     first;

    //     return () => {
    //         second;
    //     };
    // }, [user]);

    return (
        <div className="App">
            <header className="App-header">
                {user && (
                    <div>
                        <h1>You are not signed in</h1>
                        <div>
                            <label>Email</label>
                            <input type="text" id="email" name="email" />
                        </div>
                        <br></br>
                        <div>
                            <label>Password</label>{" "}
                            <input
                                type="password"
                                id="password"
                                name="password"
                            />
                            <br></br>
                        </div>
                        <div>
                            <input
                                type="button"
                                id="loginButton"
                                name="loginButton"
                                value="Sign In"
                            />
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
}

export default App;
