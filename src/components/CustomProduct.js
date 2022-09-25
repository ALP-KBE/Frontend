import React, {useState} from "react";

import CustomProductComponent from "./CustomProductComponent";

const CustomProduct = ({emptyCustomProduct,customProduct}) => {

    const [productName, setProductName] = useState('')
    const [productCreationFeedbackMsg, setProductCreationFeedbackMsg] = useState('')

    let customProductComponents = customProduct.map((customProductComponent) => (
        <CustomProductComponent customProductComponent={customProductComponent}/>
    ));

    const onSubmit = async (e) => {
        e.preventDefault();
        let productNameForBackend=productName;
        var componentsForBackend = [];
        for (let i = 0; i < customProduct.length; i++) {
            componentsForBackend = [...componentsForBackend, customProduct[i].name];
        }
        var url='/components/';
        url= url + productNameForBackend;
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(customProduct)
        })
        const data = res.ok //await res
        if(data){
            setProductCreationFeedbackMsg(productName+' wurde hinzugefügt');
            setProductName('');
            emptyCustomProduct();
        }

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
                {productCreationFeedbackMsg}
            </form>
        </div>
    )
}
export default CustomProduct