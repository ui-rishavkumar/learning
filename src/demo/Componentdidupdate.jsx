import React from "react";

class Componentdidupdate extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }
        console.log("constructer")
    }
    componentDidUpdate(preProps,preState,snapshots){
        console.log("componentdidupdate" , preState)
        if(this.state.count<10){
            this.setState({count:this.state.count+1})
        }
    }
    render(){
        console.log("render")
        return(
            <>
                <h1>Componenet did mount {this.state.count}</h1>
                <button onClick={()=> this.setState({count:1})}>update it</button>
            </>
        )
    }
}
export default Componentdidupdate;