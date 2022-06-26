import React, { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    setEmail: CallableFunction;
    setPassword: CallableFunction;
    loginEmailPassword: CallableFunction;
    createAccount: CallableFunction;
    isError: Boolean;
}

export default function NotLoggedIn({
    setEmail,
    setPassword,
    loginEmailPassword,
    createAccount,
    isError,
}: Props) {
    const navigate = useNavigate();
    return (
        <div id="parent-box">
            <h1>You are not signed in</h1>
            <div className="content-box">
                <label>Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
            </div>
            <br></br>
            <div className="content-box">
                <label>Password</label>{" "}
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
            </div>
            <br></br>
            {isError ? (
                <p id="error-text">Your email is not registered!</p>
            ) : null}
            <div>
                <input
                    onClick={(e) => {
                        loginEmailPassword(e).then(() => {
                            navigate("/LoggedIn");
                        });
                    }}
                    type="button"
                    name="loginButton"
                    id="login-button"
                    value="Sign In"
                />
            </div>
            <div>
                <input
                    onClick={(e) => {
                        createAccount(e).then(() => {
                            navigate("/LoggedIn");
                        });
                    }}
                    type="button"
                    name="loginButton"
                    id="register-button"
                    value="Register"
                />
            </div>
        </div>
    );
}
