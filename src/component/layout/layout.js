import React, {Component} from 'react'
import Aux from '../../hoc/hoc'
import './layout.css'
import Toolbar from '../Burger/Toolbar/Toolbar'
import Sidedrawer from '../Sidedrawer/Sidedrawer'
//import Backdrop from '../UI/Backdrop/Backdrop'

class Layout extends Component{
    state={
        drawerClose: false
    }
    drawerCloseHandler=()=>{
        this.setState({drawerClose: false })
    }
    menuToggleHandler=()=>{
            this.setState({drawerClose:true})
    }
    render(){
        return(
            <Aux>
               
              
                <Toolbar menudrawer={this.menuToggleHandler}/>
                    <Sidedrawer closed={this.drawerCloseHandler}
                     open={this.state.drawerClose}/>
                   
                
            
                <main className='content'>
                    { this.props.children } 
                </main>
            </Aux>
        )
    }
}


export default Layout