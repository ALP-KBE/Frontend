const ProductComponentDescription = ({productComponent}) => {
    return(
        <div className={'task'}>
            <p>Name: {productComponent.name}</p>
            <p>Herkunft: {productComponent.herkunft}</p>
            <p>Farbe: {productComponent.farbe}</p>
            <p>Hersteller: {productComponent.hersteller}</p>
            <p>Form: {productComponent.form}</p>
            <p>Gebrauchszustand: {productComponent.gebrauchszustand}</p>
            <p>Preis: {productComponent.preis}</p>
            <p>Verfügbarkeit: {productComponent.verfuegbarkeit}</p>
            <p>Klangauswirkung: {productComponent.klangauswirkung}</p>
            <br/>
        </div>
    )
}

export default ProductComponentDescription