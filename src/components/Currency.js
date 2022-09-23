import Button from "./Button";
import React from "react";

const Currency = ({currencyTabActive, setNewCurrency}) => {

    return (
        <div>
            {currencyTabActive && <div>
                <Button cssClass={"btnGrey"} text={'Euro'} onClick={() => {
                    setNewCurrency('Euro');
                }}/>
                <Button cssClass={"btnGrey"} text={'Gold'} onClick={() => {
                    setNewCurrency('Gold');

                }}/>
                <Button cssClass={"btnGrey"} text={'Dollar'} onClick={() => {
                    setNewCurrency('Dollar');
                }}/>
            </div>}
        </div>
    )
}
export default Currency