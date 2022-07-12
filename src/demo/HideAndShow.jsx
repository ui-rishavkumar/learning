import React, { useState } from "react";

const HideandShow =() =>{
    const [status , setStatus] = useState(false);
    return(
        <>
            <div>
            {
                status?<h1>hide and show</h1>:null
            }
            </div>
            <button onClick={() => setStatus(!status)}>toggle</button>
            <button onClick={() => setStatus(false)}>hide</button>
            <button onClick={() => setStatus(true)}>show</button>
        </>
    )
}
export default HideandShow;
