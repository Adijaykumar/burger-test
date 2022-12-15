import React from "react"
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"
import './Burger.css'

const Burger =(props) =>{
    let transformIngredient = Object.keys(props.ingredients)
    .map( (igKey)=>{
           return [...Array(props.ingredients[igKey])].map( (_, i)=>{
             return   <BurgerIngredient key ={igKey+i} type={igKey}/> 
           //  console.log(<BurgerIngredient key={igKey+i} type={igKey} />)  //
           }

           )
    }
 )
    //console.log(transformIngredient)
    .reduce((arr, el)=>{
        return arr.concat(el)
     },[])
    // console.log(transformIngredient)
    if ( transformIngredient.length===0){
           transformIngredient=<p style={{display:'flex', justifyContent:'center'}}> Please add ingredient</p>
    }
    return(
        <div className="Burger">
              <BurgerIngredient type='bread-top'/>
              {transformIngredient}
              <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}

export default Burger