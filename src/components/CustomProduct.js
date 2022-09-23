import React, {useState} from "react";

import CustomProductComponent from "./CustomProductComponent";

const CustomProduct = ({customProduct}) => {

    const [productName, setProductName] = useState('')

    let customProductComponents = customProduct.map((customProductComponent) => (
        <CustomProductComponent customProductComponent={customProductComponent}/>
    ));

    const onSubmit = (e) => {
        e.preventDefault();
        let productFormatForBackend=[{'id': productName}];
        for(let i=0; i<customProduct.length; i++){
            productFormatForBackend= [...productFormatForBackend, {[i]: customProduct[i].name}];
        }
        console.log(productFormatForBackend);
    }

    return (
        <div className={'lightGreyField'}>
            <form className={'contact-form'} onSubmit={onSubmit}>
                <div className={'form-control'}>
                    <input type={'text'}
                           placeholder='Produktnamen eingeben'
                           required={true}
                           value={productName}
                           onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
                <div>{customProductComponents}</div>
                <input type={'submit'} value={'Produkt erstellen'} className={'btnSmallest'}/>
                <br/>
            </form>
        </div>
    )
}
export default CustomProduct