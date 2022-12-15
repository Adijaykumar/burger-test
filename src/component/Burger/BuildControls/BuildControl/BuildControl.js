import React from 'react'
import './BuildControl.css'
//import buildControls from '../BuildControls'
const BuildControl =(props) => (
    <div className='BuildControl'>
    
            <div className='Label'> {props.label} </div>
            <button className='More'  onClick={props.added} > more </button>
            <button className='Less'  onClick={props.remove}  > less </button>
   </div>
)

export default BuildControl