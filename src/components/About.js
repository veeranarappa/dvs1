import React, {Component} from 'react'

class About extends Component{
    constructor(){
        super()
        this.state = {
          text : 'Please Subscribe'
        }
    }
    
    changeText(){
        this.setState({
            text: 'Thank You For Subscribe'
        })
    }

    render(){
        return(
            <div>
                <h1> {this.state.text} </h1>
                <button onClick={() => this.changeText()}> Subscribe Here </button>
            </div>
        )
    }
}
 
export default About;