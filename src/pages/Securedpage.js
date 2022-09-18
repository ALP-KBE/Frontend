import React, {useState} from "react";
import Button from "../components/Button";
import Nav from "../components/Nav"
const Securedpage = ({loggedInUser,logOut,components}) => {

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