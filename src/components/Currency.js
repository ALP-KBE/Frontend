import Button from "./Button";
import React from "react";

const Currency = ({currency, currencyTabActive, setNewCurrency, getComponents}) => {

    return (
        <div>
            {currencyTabActive && <div>
                <Button cssClass={"btnGrey"} text={'riel'} onClick={() => {
                    setNewCurrency('riel');
                }}/>
                <Button cssClass={"btnGrey"} text={'kyat'} onClick={() => {
                    setNewCurrency('kyat');
                }}/>
                <Button cssClass={"btnGrey"} text={'dollar'} onClick={() => {
                    setNewCurrency('dollar');
                }}/>
                <Button cssClass={"btnGrey"} text={'yen'} onClick={() => {
                    setNewCurrency('yen');
                }}/>
                <Button cssClass={"btnGrey"} text={'euro'} onClick={() => {
                    setNewCurrency('euro');
                }}/>
            </div>}
        </div>
    )
}
export default Currency