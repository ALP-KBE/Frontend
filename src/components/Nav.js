import React from "react";
import {useKeycloak} from "@react-keycloak/web";
import Button from "./Button";

const Nav = () => {
    const {keycloak, initialized} = useKeycloak();

    return (
        <div>
            <nav>
                <div className="header">
                    <h1>
                        GuitarBuilder
                    </h1>
                    <div>
                        <div>
                            {!keycloak.authenticated && (
                                <Button
                                    text={'log in'}
                                    type="button"
                                    className="text-blue-800"
                                    onClick={() => keycloak.login()}
                                >
                                    Login
                                </Button>
                            )}
                            {!!keycloak.authenticated && (
                                <Button
                                    text={'log out'}
                                    type="button"
                                    className="text-blue-800"
                                    onClick={() => keycloak.logout()}
                                >
                                    Logout ({keycloak.tokenParsed.preferred_username})
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;