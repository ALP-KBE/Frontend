import React, {useEffect, useState} from "react";
import Button from "../components/Button";
import ProductComponents from "../components/ProductComponents";
import ProductCreation from "../components/ProductCreation";
import Currency from "../components/Currency";
import Products from "../components/Products";

const Securedpage = () => {
    const [allProductComponentsAreShown, setAllProductComponentsAreShown] = useState(false)
    const [shoppingCartSystemActive, setShoppingCartSystemActive] = useState(false)
    const [currency, setCurrency] = useState('dollar')
    const [currencyTabActive, setCurrencyTabActive] = useState(false)
    const [productComponents, setProductComponents] = useState([])
    const [productsAreShown, setProductsAreShown] = useState(false)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductComponents(currency)
    }, [])

    const getProductComponents = async (currency) => {
        const productComponentsFromServer = await fetchProductComponents(currency)
        console.log(productComponentsFromServer)
        setProductComponents(productComponentsFromServer)
    }

    const fetchProductComponents = async (currency) => {
        var url = '/components?currency=';
        url = url + currency;
        console.log(url)
        const res = await fetch(url)
        const data = await res.json()
        console.log(res)
        return data
    }

    useEffect(() => {
        console.log('changeProducts')
        changeProducts(currency)
    }, [])

    const changeProducts = async (currency) => {
        const productsFromServer = await fetchProducts(currency)
        console.log(productsFromServer)
        setProducts(productsFromServer)
    }

   /* const addProductsToStateArray = (productsFromServer) => {
        setProducts(products => [...products,productsFromServer])
    }*/

    const fetchProducts = async (currency) => {
        var url = '/products?currency=';
        url = url + currency;
        console.log(url);
        const res = await fetch(url)
        const data = await res.json()
        console.log(res);
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
            }}/>}<Currency getProductComponents={getProductComponents} currency={currency} currencyTabActive={currencyTabActive} setNewCurrency={setNewCurrency}/>

            <ProductComponents productComponents={productComponents}
                               allProductComponentsAreShown={allProductComponentsAreShown}
            />{shoppingCartSystemActive && <ProductCreation changeProducts={changeProducts} currency={currency} productComponents={productComponents}
                                                            shoppingCartSystemActive={shoppingCartSystemActive}/>}<Products
            productsAreShown={productsAreShown} currency={currency} products={products}/>

        </div>
    )
}

export default Securedpage