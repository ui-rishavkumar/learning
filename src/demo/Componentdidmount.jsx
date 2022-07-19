import React from "react";

class Componentdidmount extends React.Component{
    constructor(){
        super();
        this.state={
            name:"rishav"
        }
        console.log("constructer")
    }
    componentDidMount(){
        console.log("componentdidmount")
    }
    render(){
        console.log("render")
        return(
            <>
                <h1>Componenet did mount {this.state.name}</h1>
                <button onClick={()=> this.setState({name:"srivastav"})}>click me</button>
            </>
        )
    }
}
export default Componentdidmount;