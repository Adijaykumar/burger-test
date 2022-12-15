import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import './BuildControls.css'

const controls = [
   {label: 'Chees' , type:'chees'},
   {label: 'Becon' , type:'becon'}
]


const BuildControls = (props) =>{

   return(
   <div className='BuildControls' > 
       <p>Price : ${props.price}</p>
           
               {controls.map( ctrl=>(
                   <BuildControl
                    key={ctrl.label}
                     label={ctrl.label}
                   
                     added={()=> props.ingredientsAdd(ctrl.type)}
                     remove={()=> props.ingredientsRemove(ctrl.type)}
                   />
              ))}
                 <button className='OrderButton' onClick={props.ordered}>Order </button>    
   </div>
   )
}

export default BuildControls