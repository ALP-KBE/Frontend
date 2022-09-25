import React from "react";

const CustomProductComponent = ({customProductComponent}) => {

    return (
        <div>
            <p className={'itemGrey'}>{customProductComponent.name}</p>
        </div>
    )
}
export default CustomProductComponent