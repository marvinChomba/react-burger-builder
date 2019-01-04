import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad:1,
            cheese:1,
            meat:1,
            bacon:1,
        },
        totalAmount:0,
    }
    render () {
        return (
            <Burger ingredients={this.state.ingredients} />
        )
    }
}

export default BurgerBuilder