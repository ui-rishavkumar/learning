import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allentry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    if (email && password){
        const newentry = { id:new Date().getTime().toString(), email, password };
        setAllEntry([...allentry, newentry]);
        console.log(allentry);
        setEmail("")
        setPassword("")
    }
    else{
        alert("please fill alll the data")
    }
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="email">email</label>
        <input
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="password">password</label>
        <input
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">submit</button>
      </form>
      <div>
        {allentry.map((items) => {
            const {id , email , password} = items;
          return (
            <div key={id}>
              <p>{email}</p>
              <p>{password}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
