
import React, { useState } from 'react'

const UserLogin = ({title}) => {
    return <h1>{title}</h1>;
  }
  
  const UserLogout = ({title}) => {
    return <h1>{title}</h1>;
  }
  
  function ConditionalRendring({isLoggedIn}) {
  const [val, setVal]=useState(0);
   return<>
   <h1>{val}</h1>
   <button onClick={()=>setVal(val+1)}>Click</button>
      {isLoggedIn?<UserLogin title="Login Form"/>:<UserLogout title="UserLogout Page"/>}
   </>
  }
  
export default ConditionalRendring;
