import React, {Component} from  'react'

class Seconds extends Component{
    constructor(){
        super()
        this.state ={
            seconds : 0
        }
    }

    tick() {
        this.setState(state => ({
          seconds: state.seconds + 1
        }));
      }
    
      componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
      }

      componentWillUnmount() {
        clearInterval(this.interval);
      }
       
    render(){
        return(
            <div> <h1> Seconds {this.state.seconds} </h1></div>
        )
    }
}
   
export default Seconds;