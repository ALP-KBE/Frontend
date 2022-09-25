import React, {useEffect, useState} from "react";
import ProductComponent from "./ProductComponent";
import CustomProductComponent from "./CustomProductComponent";
import CustomProduct from "./CustomProduct";

const ProductCreation = ({productComponents, shoppingCartSystemActive}) => {

    const [customProduct, setCustomProduct] = useState([]);
    const [customProductCreated, setCustomProductCreated] = useState(false);

    const createCustomProduct = customProductComponent => {
        setCustomProduct(customProduct => [...customProduct,customProductComponent])
    }

    const emptyCustomProduct = () => {
        setCustomProduct([])
    }

    let productComponentList;

    if (shoppingCartSystemActive) {
        productComponentList = productComponents.map((productComponent) => (
            <ProductComponent productComponent={productComponent}
                              shoppingCartSystemActive={shoppingCartSystemActive}
                              createCustomProduct={createCustomProduct}
            />
        ));
    }else {
        <div/>

    }

    useEffect(() => {
        if (customProduct.length > 0)setCustomProductCreated(true);
    }, [customProduct]);

    return (
        <div>
            <div style={{float: 'left'}} className={'itemGrey'} >{productComponentList}</div>{customProductCreated && <CustomProduct emptyCustomProduct={emptyCustomProduct} customProduct={customProduct}/>}
        </div>
    )
}
export default ProductCreation