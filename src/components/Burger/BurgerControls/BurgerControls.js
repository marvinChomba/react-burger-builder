import React from "react";
import classes from "./BurgerControls.css";
import Control from "./BurgerControl/Control"


const BurgerControls = props => {
    const controls = Object.keys(props.ingredients);
    return (
        <div className={classes.BuildControls}>
            <h4>Total: {props.total.toFixed(2)}</h4>
            {controls.map(control => {
                return <Control key={control} addable={props.ingredients[control] ? true : false} label={control.toUpperCase()} adder={() => props.adder(control)} remover={() => props.remover(control)}/>
            })}
            <button className={classes.OrderButton} disabled={!props.purchasable}>Order Now</button>
        </div>
    )
}  

export default BurgerControls