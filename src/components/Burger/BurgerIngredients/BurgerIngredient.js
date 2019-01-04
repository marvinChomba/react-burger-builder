import React from "react";
import classes from "./BurgerIngredient.css";

const BurgerIngredient = props => {
    // gets the type of ingrdient and renders the ingredient
    const ingredient  = props.ingredient
    let finalIngredient = null
    switch (ingredient) {
        case("salad"):
            finalIngredient = <div className={classes.Salad}></div>;
            break;
        case("meat"):
            finalIngredient = <div className={classes.Meat}></div>;
            break;
        case("cheese"):
            finalIngredient = <div className={classes.Cheese}></div>;
            break;
        case("bacon"):
            finalIngredient = <div className={classes.Bacon}></div>
            break;
        case("bread-bottom"):
            finalIngredient = <div className={classes.BreadBottom}></div>
            break;
        case("bread-top"):
            finalIngredient = <div className={classes.BreadTop}></div>
            break;
        default:
            finalIngredient = null
            break;
    }
    return finalIngredient
}

export default BurgerIngredient