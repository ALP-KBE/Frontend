import React, {useState, useEffect} from 'react';
import {ReactKeycloakProvider} from "@react-keycloak/web";
import keycloak from "./keycloak"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Nav from "./components/Nav";
import WelcomePage from "./pages/Homepage";
import SecuredPage from "./pages/Securedpage";
import PrivateRoute from "./helpers/PrivateRoute";

const App = () => {

    const [components, setComponents] = useState('');

    useEffect(() => {
        fetch('/components')
            .then(response => response.text())
            .then(components => {
                setComponents(components);
            });
    }, [])

    return (
        <div>
            <ReactKeycloakProvider authClient={keycloak}>
                <Nav />
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<WelcomePage />} />
                        <Route
                            path="/secured"
                            element={
                                <PrivateRoute>
                                    <SecuredPage components={components}/>
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