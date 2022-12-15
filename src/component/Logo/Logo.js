import React from "react";
import Burgerimage from '../../assets/images/burger-logo.png'
import './Logo.css'

const logo =(props)=>(
    <div className="Logo" style={{height:props.height , width:props.width}}>
           <img src={Burgerimage} alt='burger'/>
    </div>

)

export  default logo