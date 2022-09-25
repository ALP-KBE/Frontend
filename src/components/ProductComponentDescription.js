import Button from "./Button";

const ProductComponentDescription = ({createCustomProduct,productComponent, shoppingCartSystemActive}) => {
    const handleClick = () => {
        createCustomProduct(productComponent)
    }
    return(
        <div className={'task'}>
            <p>Komponententyp: {productComponent.komponententyp}</p>
            <p>Herkunft: {productComponent.herkunft}</p>
            <p>Farbe: {productComponent.farbe}</p>
            <p>Hersteller: {productComponent.hersteller}</p>
            <p>Form: {productComponent.form}</p>
            <p>Gebrauchszustand: {productComponent.gebrauchszustand}</p>
            <p>Preis: {productComponent.preis}</p>
            <p>Verfügbarkeit: {productComponent.verfuegbarkeit}</p>
            <p>Klangauswirkung: {productComponent.klangauswirkung}</p>
            {shoppingCartSystemActive && <Button cssClass={"btnSmallest"}
                                                 onClick={handleClick}
                                                 text={'Hinzufügen'}/>}
            <br/>
        </div>
    )
}

export default ProductComponentDescription