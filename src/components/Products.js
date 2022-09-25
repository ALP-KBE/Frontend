import React from "react";
import Product from "./Product";

const Products = ({productsAreShown, products, currency}) => {
    let productList = products.map((product) => (
        <Product currency={currency} product={product}/>
    ));
    return (
        <div>
            {productsAreShown &&
                <div style={{float: 'left'}} className={'itemGrey'}>
                    {productList}
                </div>
            }
        </div>

    )
}
export default Products