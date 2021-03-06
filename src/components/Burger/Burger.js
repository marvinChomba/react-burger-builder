import React from "react";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";
import classes from "./Burger.css"

const burger = props => {
    // this gets the ingredients and renders the ingredient with each type of ingredient
    // it will receive the props as an object/dictionary
    // change it to an array
    let keysArr = Object.keys(props.ingredients); //["salad","cheese","chicken"]

    let finalBurger = keysArr.map(key => {
        return ([...Array(props.ingredients[key])].map((_,i) => {
            return <BurgerIngredient ingredient={key} key={key + i}/>
        }))
    })
    let total = Object.values(props.ingredients).reduce((sum,value) => sum+=value,0);
    if (total === 0) {
        finalBurger = <h5>Add something Bro</h5>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient ingredient="bread-top" />
            {finalBurger}
            <BurgerIngredient ingredient="bread-bottom" />
        </div>
    )
}


export default burger