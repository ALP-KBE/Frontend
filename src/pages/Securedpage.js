import React, {useState} from "react";
import Button from "../components/Button";
import {useKeycloak} from "@react-keycloak/web";

const Securedpage = ({components}) => {
    const {keycloak, initialized} = useKeycloak();
    const [allProductComponentsAreShown, setAllProductComponentsAreShown] = useState(false)

    return (

        <div>
            <Button text={'Unsere Produkte'}/>
            <Button text={'Alle Produktkomponenten anzeigen'} onClick={() => {
                setAllProductComponentsAreShown(true)
            }}/>
            <Button text={'Meine Gitarren'}/>
            <Button text={'Währung'}/>

            {allProductComponentsAreShown && <p>{components}</p>}

        </div>
    )
}

export default Securedpage