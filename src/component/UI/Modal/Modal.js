import React from "react";
import Aux from  '../../../hoc/hoc'
import Backdrop from '../Backdrop/Backdrop'
import './Modal.css'

const Modal =(props)=>(
   <Aux>
       <Backdrop show={props.show} modalclicked={props.backclick}/>
     <div className="Modal"
      style={{transform: props.show? 'translateY(0)': 'translateY(-120vh)'}}> 
        {props.children}
      </div>
    </Aux>
)

export default Modal