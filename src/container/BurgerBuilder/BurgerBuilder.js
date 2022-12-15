import React, { Component } from 'react'
import Burger from '../../component/Burger/Burger'
import BuildControls from '../../component/Burger/BuildControls/BuildControls'
import Modal from '../../component/UI/Modal/Modal'
import OrderSummary from '../../component/Burger/OrderSummary/OrderSummary'


import Aux from '../../hoc/hoc'
  

const INGREDIENT_PRICE = {
    chees:3.0,
    becon:2.0
}



class BurgerBuilder extends Component {
    state = {
        ingredients :{
          
            chees:3,
            becon:1 
        },
        totalPrice: 4.0,
        purchasing: false,
    }
    addIngredientHandler =(type) =>{
        const oldCount = this.state.ingredients[type]
        const updateCount = oldCount + 1
        const updateIngredient ={
            ...this.state.ingredients
        }
      
        updateIngredient[type] = updateCount
        const priceAddition = INGREDIENT_PRICE[type]
        const oldPrice = this.state.totalPrice
        const newPrice = priceAddition +  oldPrice
        this.setState({totalPrice:newPrice , ingredients: updateIngredient})
     }

      removeIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type]
        if (oldCount<=0){
            return console.log(alert("Add the Ingredients"))
        }
        const updateCount = oldCount - 1

        const updateIngredient ={
            ...this.state.ingredients
        }
      
        updateIngredient[type] = updateCount
        const priceDeduction = INGREDIENT_PRICE[type]
        const oldPrice = this.state.totalPrice
        const newPrice =oldPrice- priceDeduction
        this.setState({totalPrice:newPrice , ingredients: updateIngredient})
     }

     purchasingHandler = ()=>{
        this.setState({purchasing:true})
     }

     backdropHandler = ()=>{
        this.setState({purchasing:false})
     }
    render() {
        
        return(
            <Aux>
               <Modal show={this.state.purchasing} backclick={this.backdropHandler}>
                 <OrderSummary  ingredient={this.state.ingredients}/>
                 </Modal>
               <Burger  ingredients={this.state.ingredients} /> 
               <BuildControls ingredientsAdd={this.addIngredientHandler}
                     ingredientsRemove ={this.removeIngredientHandler}
                     price= {this.state.totalPrice}
                     ordered ={this.purchasingHandler}
               
              />
                  
      
            </Aux>
        );
    }
}

export default BurgerBuilder