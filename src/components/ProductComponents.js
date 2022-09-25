import React, {useState} from "react";
import ProductComponent from "./ProductComponent";
import Button from "./Button";

const ProductComponents = ({productComponents, allProductComponentsAreShown, shoppingCartSystemActive}) => {
    console.log('productComponents: '+productComponents);
    let productComponentList = productComponents.map((productComponent) => (
        <ProductComponent productComponent={productComponent}
                          shoppingCartSystemActive={shoppingCartSystemActive}
        />
    ));

    return (
        <div>
            {allProductComponentsAreShown && <div style={{float: 'left'}} className={'itemGrey'}>{productComponentList}</div>}
        </div>
    )
}
export default ProductComponents