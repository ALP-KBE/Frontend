import React from "react";
import ProductComponent from "./ProductComponent";

const ProductComponents = ({productComponents, allProductComponentsAreShown}) => {
    let productComponentList;

    if (allProductComponentsAreShown) {
        productComponentList = productComponents.map((productComponent) => (
            <ProductComponent productComponent={productComponent}/>
        ));
    }else{
        productComponentList=<div></div>;
    }

    return (
        <div>
            <div style={{float: 'left', width: '40%'}}>{productComponentList}</div>
        </div>
    )
}

export default ProductComponents