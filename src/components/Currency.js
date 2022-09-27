import Button from "./Button";
import React from "react";

const Currency = ({getProductComponents, currency, currencyTabActive, setNewCurrency, getComponents}) => {

    return (
        <div>
            {currencyTabActive && <div>
                <Button cssClass={"btnGrey"} text={'riel'} onClick={() => {
                    getProductComponents('riel');
                    setNewCurrency('riel');
                }}/>
                <Button cssClass={"btnGrey"} text={'kyat'} onClick={() => {
                    getProductComponents('kyat');
                    setNewCurrency('kyat');
                }}/>
                <Button cssClass={"btnGrey"} text={'dollar'} onClick={() => {
                    getProductComponents('dollar');
                    setNewCurrency('dollar');
                }}/>
                <Button cssClass={"btnGrey"} text={'yen'} onClick={() => {
                    getProductComponents('yen');
                    setNewCurrency('yen');
                }}/>
                <Button cssClass={"btnGrey"} text={'euro'} onClick={() => {
                    getProductComponents('euro');
                    setNewCurrency('euro');
                }}/>
            </div>}
        </div>
    )
}
export default Currency