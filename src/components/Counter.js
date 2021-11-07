import React, {Component} from 'react';

class Counter extends Component{
    constructor(){
        super()
        this.state ={
        count :0
        }
    }
   
    increment(){
        this.setState({
            count : this.state.count + 1
        })
    }

    decrement(){
        this.setState({
            count:this.state.count - 1
        })
    }

    render(){
        return(
            <div> 
                <h1> Count {this.state.count} </h1> 
                <button onClick={()=> this.increment()}> Increment Button </button>
                <button onClick={()=> this.decrement()}> Decrement Button </button>
            </div>
        )
    }
}

export default Counter;