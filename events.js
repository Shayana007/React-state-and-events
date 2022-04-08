import React, {Component} from "react";
import Hello from "./getstart";

class Demo extends React.Component{
    render(){
        return(
        <button onClick={ () => alert('Hello,World!')}>Clickme</button>
        )
    }
}

export default Demo