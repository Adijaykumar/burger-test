import React from "react";
import Logo from "../Logo/Logo";
import Navigationitems from "../Navigation/Navigationitems";
import  './Sidedrawer.css'
import Backdrop from "../UI/Backdrop/Backdrop";
import Aux from "../../hoc/hoc";

const sidedrawer=(props)=>{
    //   let attachClasses =[classes.Sidedrawer , classes.Close]
    //   if(props.open){
    //     attachClasses = [classes.Sidedrawer , classes.Open]
    //    }
    return(
       <Aux>
             <Backdrop show={props.open} modalclicked={props.closed}/>
              <div className={props.open ? 'Sidedrawer , Open' :'Sidedrawer , Close' }>
                <Logo height='8%' width='fit-content'/>
                <nav>
                <Navigationitems  style={{display:'flex', flexDirectiom:'column'}} />
                </nav>
               
            </div>
       </Aux>
       
    )
}

export default sidedrawer