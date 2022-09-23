import {useState} from "react";
import ProductComponentDescription from "./ProductComponentDescription";
import Button from "./Button";
const ProductComponent= ({createCustomProduct,productComponent, shoppingCartSystemActive})=>{
    const [descriptionIsShown, setDescriptionIsShown] = useState(false)

    return (
        <div>
            <Button text={productComponent.name}
                    cssClass={"btnSmall"}
                    onClick={() => {
                        descriptionIsShown ? setDescriptionIsShown(false) : setDescriptionIsShown(true)}}/>
            {descriptionIsShown && <ProductComponentDescription productComponent={productComponent}
                                                                shoppingCartSystemActive={shoppingCartSystemActive}
                                                                createCustomProduct={createCustomProduct}/>}
        </div>
    )
}

export default ProductComponent