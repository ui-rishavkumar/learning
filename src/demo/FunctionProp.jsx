import React from "react";

const User = (props) =>{
    return(
        <>
            <h1>user component</h1>
            <button onClick={()=> props.data()}>click</button>
        </>
    )
}
export default User;