import React, {useEffect, useState} from "react";
import Button from "../components/Button";
import ProductComponents from "../components/ProductComponents";
import ProductCreation from "../components/ProductCreation";
import Currency from "../components/Currency";
import Products from "../components/Products";

const Securedpage = () => {
    const [allProductComponentsAreShown, setAllProductComponentsAreShown] = useState(false)
    const [shoppingCartSystemActive, setShoppingCartSystemActive] = useState(false)
    const [currency, setCurrency] = useState('riel')
    const [currencyTabActive, setCurrencyTabActive] = useState(false)
    const [productComponents, setProductComponents] = useState([])
    const [productsAreShown, setProductsAreShown] = useState(false)

    const [products, setProducts] = useState([
        {
            "id": "Johannes sein Paket",
            "component1": "Ahornhals",
            "price": '20'
        },
        {
            "id": "Frisches vom Markt",
            "component1": "Rollensteg",
            "component2": "Ahornhals",
            "price": '30'
        },
    ]);

    /*    const updateComponentsWithRightCurrency = (currency) => {
            useEffect(() => {
                const getProductComponents = async () => {
                    const productComponentsFromServer = await fetchProductComponents(currency)
                    setProductComponents(productComponentsFromServer)
                }
                getProductComponents()
            }, )
        }


    const getComponents = async (currency) => {
        let url = '/components?currency=';
        url = url + currency;
        const res = await fetch(url, {
            method: 'GET'
        })
        const data = await res.json()
        console.log(data);
        console.log(res);
        setProductComponents(data);
    }
*/
    useEffect(() => {
        const getProductComponents = async () => {
            const productComponentsFromServer = await fetchProductComponents()
            console.log(productComponentsFromServer)
            setProductComponents(productComponentsFromServer)
        }
        getProductComponents()
    }, [])

    const fetchProductComponents = async () => {
        var url = '/components?currency=';
        url = url + currency;
        const res = await fetch(url)
        console.log(res);
        const data = await res.json()
        return data
    }

    const setNewCurrency = currency => {
        setCurrency(currency)
    }

    return (

        <div>
            {productsAreShown ? <Button cssClass={"btnGrey"} text={'Produkte anzeigen'} onClick={() => {
                setProductsAreShown(false)
            }}/> : <Button cssClass={"btn"} text={'Produkte anzeigen'} onClick={() => {
                setShoppingCartSystemActive(false)
                setCurrencyTabActive(false)
                setAllProductComponentsAreShown(false)
                setProductsAreShown(true)
            }}/>}

            {allProductComponentsAreShown ? <Button cssClass={"btnGrey"} text={'Produktkomponenten'} onClick={() => {
                setAllProductComponentsAreShown(false)
            }}/> : <Button cssClass={"btn"} text={'Produktkomponenten'} onClick={() => {
                setShoppingCartSystemActive(false)
                setCurrencyTabActive(false)
                setProductsAreShown(false)
                setAllProductComponentsAreShown(true)
            }}/>}

            {shoppingCartSystemActive ? <Button cssClass={"btnGrey"} text={'Produkt erstellen'} onClick={() => {
                setShoppingCartSystemActive(false)
            }}/> : <Button cssClass={"btn"} text={'Produkt erstellen'} onClick={() => {
                setAllProductComponentsAreShown(false)
                setCurrencyTabActive(false)
                setProductsAreShown(false)
                setShoppingCartSystemActive(true)
            }}/>}

            {currencyTabActive ? <Button cssClass={"btnGrey"} text={'Währung in ' + currency} onClick={() => {
                setCurrencyTabActive(false)
            }}/> : <Button cssClass={"btn"} text={'Währung in ' + currency} onClick={() => {
                setAllProductComponentsAreShown(false)
                setShoppingCartSystemActive(false)
                setProductsAreShown(false)
                setCurrencyTabActive(true)
            }}/>}<Currency currency={currency} currencyTabActive={currencyTabActive} setNewCurrency={setNewCurrency}/>

            <ProductComponents productComponents={productComponents}
                               allProductComponentsAreShown={allProductComponentsAreShown}
            />{shoppingCartSystemActive && <ProductCreation productComponents={productComponents}
                                                            shoppingCartSystemActive={shoppingCartSystemActive}/>}<Products
            productsAreShown={productsAreShown} currency={currency} products={products}/>

        </div>
    )
}

export default Securedpage