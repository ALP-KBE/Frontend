import React, {useState, useEffect} from 'react';
import {ReactKeycloakProvider} from "@react-keycloak/web";
import keycloak from "./keycloak"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Nav from "./components/Nav";
import SecuredPage from "./pages/Securedpage";
import PrivateRoute from "./helpers/PrivateRoute";

const App = () => {

    const [productComponents, setProductComponents] = useState('');

    useEffect(() => {
        const getProductComponents = async () => {
            const productComponentsFromServer = await fetchProductComponents()
            setProductComponents(productComponentsFromServer)
        }
        getProductComponents()
    }, [])
    const fetchProductComponents = async () => {
        const res = await fetch('/components')
        const data = await res.json()
        return data
    }

    return (
        <div>
            <ReactKeycloakProvider authClient={keycloak}>
                <Nav />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={
                                <PrivateRoute>
                                    <SecuredPage productComponents={productComponents}/>
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