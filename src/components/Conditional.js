import React, {Component} from 'react';

class Conditional extends Component{

    constructor(){
        super()
        this.state ={
            isLoggedIn:false
        }
    }


    render(){
        return(
           
                this.state.isLoggedIn ? (
                   <p> This is Login Page</p>
                ) : (
                   <p>
                        This is Logout Page 
                   </p>
                )
            
        )
    }  
}
 
export default Conditional;
