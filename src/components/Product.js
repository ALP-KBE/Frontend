import React from "react";
import ProductComponent from "./ProductComponent";


const Product = ({product, currency}) => {


    return (
        <div className={'task'}>
            {Object.keys(product).map(key => {
                const value = product[key];
                if (key == 'name') {
                    return (
                        <div className={'itemGrey'} key={key}>
                            <div>{value}</div>
                        </div>
                    );
                } else if (key == 'components') {
                    let productComponentList = value.map((productComponent) => (
                        <ProductComponent productComponent={productComponent}/>
                    ));
                    return (
                        <div key={key}>
                            <div>{productComponentList}</div>
                        </div>
                    );
                } else if (key == 'price') {
                    return (
                        <div key={key}>
                            <br/>
                            <div>{value} {currency}</div>
                        </div>
                    );
                } else {
                    return (
                        <div key={key}>
                            <div>{value}</div>
                        </div>
                    );
                }
            })}
            <br/>
        </div>
    )
}
export default Product