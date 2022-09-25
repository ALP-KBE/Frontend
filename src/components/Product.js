import React from "react";


const Product = ({product, currency}) => {
    return (
        <div className={'task'}>
            {Object.keys(product).map(key => {
                const value = product[key];
                if (key == 'price') {
                    return (
                        <div key={key}>
                            <div>{value} {currency}</div>
                        </div>
                    );
                } else if(key == 'id'){
                    return (
                        <div className={'itemGrey'} key={key}>
                            <div>{value}</div>
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