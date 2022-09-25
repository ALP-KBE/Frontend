import React, {useState, useEffect} from 'react';
import {ReactKeycloakProvider} from "@react-keycloak/web";
import keycloak from "./keycloak"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Nav from "./components/Nav";
import SecuredPage from "./pages/Securedpage";
import PrivateRoute from "./helpers/PrivateRoute";

const App = () => {

    return (
        <div>
            <ReactKeycloakProvider authClient={keycloak}>
                <Nav />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={
                                <PrivateRoute>
                                    <SecuredPage/>
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </ReactKeycloakProvider>
        </div>
    )
}

export default App;