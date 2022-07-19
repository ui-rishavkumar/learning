import React from "react";

class ShouldUpdate  extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }
        console.log("constructer")
    }
    shouldComponentUpdate(){
        
        if(this.state.count<10){
            console.log("shouldupdate")
            return true;
        }
    }
    render(){
        console.log("render")
        return(
            <>
                <h1>Componenet did mount {this.state.count}</h1>
                <button onClick={()=> this.setState({count:this.state.count+1})}>update it</button>
            </>
        )
    }
}
export default ShouldUpdate;