import React from "react";
import {useKeycloak} from "@react-keycloak/web";
import Button from "./Button";

const Nav = () => {
    const {keycloak, initialized} = useKeycloak();

    return (
        <div>
            <h1 className="header">
                Guitar Builder
                <div>
                    {!keycloak.authenticated && (
                        <Button
                            onClick={() => {keycloak.login();}}
                            text={'Login'}
                        >
                        </Button>
                    )}

                    {!!keycloak.authenticated && (
                        <Button
                            text={'Logout'}
                            onClick={() => keycloak.logout()}>
                            Logout ({keycloak.tokenParsed.preferred_username})
                        </Button>
                    )}
                </div>
            </h1>
        </div>
    );
};

export default Nav;