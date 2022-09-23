import React from "react";
import Product from "./Product";

const Products = ({productsAreShown, products, currency}) => {
    console.log('products: ' + products);
    let productList = products.map((product) => (
        <Product currency={currency} product={product}/>
    ));
    console.log('productList: ' + productList);
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