import React from "react";

class Lifecycle extends React.Component{
    constructor(){
        super()
        this.state={
            data:"rishav"
        }
    }
    render(){
        return(
            <>
                <h1>hello  {this.state.data}</h1>
            </>
        )
    }
}
export default Lifecycle;