import React from 'react'
 function Index(props) {
    function clickHandler(){
        console.log('Button Clicked ')
    }
    return (
        <div>
            <h1> This is Index Page function Component {props.name} </h1>
            <button onClick = {(clickHandler)}> Extra Button </button>
        </div>
    )
}
export default Index;