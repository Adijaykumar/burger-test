import React from 'react'
import './Tolbar.css'
import Logo from '../../Logo/Logo'
import Navigationitems from '../../Navigation/Navigationitems'
const toolbar =(props)=>(
    <header className='Toolbar'>
        <div onClick={props.menudrawer} style={{cursor:'pointer'}}>MENU</div>
        <Logo height='71%'/>
         <nav>
            <Navigationitems/>
         </nav>
    </header>
)

export default toolbar