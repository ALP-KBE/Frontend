import React, {useState} from "react";
import Button from "../components/Button";
import ProductComponents from "../components/ProductComponents";

const Securedpage = ({productComponents}) => {
    const [allProductComponentsAreShown, setAllProductComponentsAreShown] = useState(false)

    return (

        <div>
            <Button cssClass={"btn"} text={'Unsere Produkte'}/>

            {allProductComponentsAreShown ? <Button cssClass={"btnGrey"} text={'Produktkomponenten'} onClick={() => {
                setAllProductComponentsAreShown(false)}}/> : <Button cssClass={"btn"} text={'Produktkomponenten'} onClick={() => {
                setAllProductComponentsAreShown(true)}}/>}

            <Button cssClass={"btn"} text={'Warenkorb'}/>
            <Button cssClass={"btn"} text={'Währung'}/>

            <ProductComponents productComponents={productComponents}
                               allProductComponentsAreShown={allProductComponentsAreShown}/>

        </div>
    )
}

export default Securedpage