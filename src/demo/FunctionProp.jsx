import React from "react";

const User = (props) =>{
    return(
        <>
            <h1>user component</h1>
            <button onClick={()=> props.data()}>prop function click</button>
        </>
    )
}
export default User;