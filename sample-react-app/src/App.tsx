import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    onAuthStateChanged,
    connectAuthEmulator,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    User,
} from "firebase/auth";
import "./App.css";
import NotLoggedIn from "./pages/NotLoggedIn";
import LoggedIn from "./pages/LoggedIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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

connectAuthEmulator(auth, "http://localhost:9099");

onAuthStateChanged(auth, (user) => {
    if (user !== null) {
        console.log("logged in!");
    } else {
        console.log("No user");
    }
});

function App() {
    // const [user] = useAuthState(auth);
    const [user, setUser] = useState<User | null | undefined>();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);

    const loginEmailPassword = async () => {
        try {
            const userCredentials = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            setUser(userCredentials.user);
            return Promise.resolve();
        } catch (error) {
            setIsError(true);
            return Promise.reject(error);
        }
    };

    const createAccount = async () => {
        try {
            const userCredentials = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            setUser(userCredentials.user);
            return Promise.resolve();
        } catch (error) {
            setIsError(true);
            return Promise.reject(error);
        }
    };

    const logOut = async () => {
        await signOut(auth);
        setIsError(false);
    };

    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Routes>
                        {/* {!user && ( */}
                        <Route path="/">
                            <Route
                                path="/"
                                element={
                                    <NotLoggedIn
                                        setEmail={setEmail}
                                        setPassword={setPassword}
                                        isError={isError}
                                        loginEmailPassword={loginEmailPassword}
                                        createAccount={createAccount}
                                    ></NotLoggedIn>
                                }
                            ></Route>
                            {/* )} */}
                            {/* {user && ( */}
                            <Route
                                path="/LoggedIn"
                                element={
                                    <LoggedIn
                                        user={user}
                                        logOut={logOut}
                                    ></LoggedIn>
                                }
                            ></Route>
                            {/* )} */}
                        </Route>
                    </Routes>
                </header>
            </div>
        </BrowserRouter>
    );
}

export default App;
