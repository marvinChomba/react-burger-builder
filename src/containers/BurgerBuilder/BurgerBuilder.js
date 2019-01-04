import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";
import Aux from "../../hoc/Aux"

const PRICES = {
    salad:0.5,
    cheese:1.0,
    meat:1.2,
    bacon:1.1,
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad:0,
            cheese:0,
            meat:0,
            bacon:0,
        },
        totalAmount:4,
        purchasable:false,
    }
    addIngredientHandler = type => {
        const ingredients = {...this.state.ingredients};
        const originalValue = ingredients[type];
        const originalTotal = this.state.totalAmount;
        const newTotal = originalTotal + PRICES[type]
        const newValue = originalValue + 1; 
        ingredients[type] = newValue;
        const values = Object.values(ingredients)
        // let purchasable = false
        for (let value of values) {
            if (value) {
                // purchasable = true
                this.setState({
                    purchasable:true
                })
            }
        }
        this.setState({
            ingredients:ingredients,
            totalAmount:newTotal
        })
    }
    removeIngredientHandler = type => {
        const ingredients = { ...this.state.ingredients };
        if(!ingredients[type]) {
            return;
        }
        const originalValue = ingredients[type];
        const newValue = originalValue - 1;
        const initialAmount = this.state.totalAmount;
        const newTotal = initialAmount - PRICES[type]
        ingredients[type] = newValue;
        const values = Object.values(ingredients)
        // let purchasable = false
        let sum = values.reduce((sum,value) => sum+=value,0)
        if (!sum) {
            this.setState({
                purchasable:false
            })
        }
        this.setState({
            ingredients: ingredients,
            totalAmount: newTotal
        })
    }
    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls ingredients={this.state.ingredients} adder={this.addIngredientHandler} remover={this.removeIngredientHandler} total={this.state.totalAmount} purchasable={this.state.purchasable}/>
            </Aux>
        )
    }
}

export default BurgerBuilder