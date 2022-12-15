import React from "react";
import './Navigationitems.css'
import Navigationitem from './Navigationitem/Navigationitem'

const navigationitems =(props)=>(
 <ul className="Navigationitems" >
    <Navigationitem link='/'>Burger</Navigationitem>
    <Navigationitem link='/'>Checkout</Navigationitem>
 </ul>
)

export default navigationitems