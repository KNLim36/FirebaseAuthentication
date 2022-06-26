import { User } from "firebase/auth";
import React, { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    user: User | null | undefined;
    logOut: MouseEventHandler;
}

export default function LoggedIn({ user, logOut }: Props) {
    const navigate = useNavigate();
    return (
        <>
            {user && (
                <>
                    <div>
                        <h3>{user ? user.email : ""}</h3>
                    </div>
                    <div>
                        <h5>
                            Creation Time:{" "}
                            {user ? user.metadata.creationTime : ""}
                        </h5>
                        <h5>
                            Last Login Time:{" "}
                            {user ? user.metadata.lastSignInTime : ""}
                        </h5>
                    </div>
                    <br />
                    <button
                        id="logout-button"
                        onClick={(e) => {
                            logOut(e);
                            navigate("/");
                        }}
                    >
                        Sign Out
                    </button>
                </>
            )}
        </>
    );
}
