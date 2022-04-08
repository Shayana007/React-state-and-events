import React, {Component} from "react";
class Demoo extends React.Component{
    display(){
        alert('Hello,World!');
    }
    render()
        {
            return(
        <button onClick={ () => this.display() }>Clickme</button>
            )
        }
    
}
export default Demoo