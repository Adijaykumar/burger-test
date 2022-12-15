import React from "react"

const orderSummary =(props)=>{
    let ingredientSummary = Object.keys(props.ingredient)
    .map( igkey =>{
        return <li key={igkey}>{igkey}: { props.ingredient[igkey]}</li>
    })

  return(
       <>
           <h1>Your Order</h1>
           <p>A delicious burger with following ingredients</p>
           <ul>
             {ingredientSummary}
             <p>Continue to check out?</p>
           </ul>
       </>
   )

}

export default orderSummary