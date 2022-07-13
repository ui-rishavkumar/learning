import React, { useState } from "react";

export default function NewFormData() {
  const [fullname, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const getFormData = (e) => {
    console.log(e);
    e.preventDefault();
    alert("form submitted");
  };
  const inputEvent = (event) => {
    // const values = event.target.value;
    // const name = event.target.name;
    console.log("fullname=>", fullname);
    const { value , name } = event.target;
    setFullName((preValue) => {
        return{
            ...preValue,
            [name] : value,
        };

    //   if (name === "fname") {
    //     return {
    //       fname: values,
    //       lname: preValue.lname,
    //     };
    //   } else if (name === "lname") {
    //     return {
    //       lname: values,
    //       fname: preValue.fname,
    //     };
    //   } else if (name === "email") {
    //     return {
    //       lname: preValue.lname,
    //       email: values,
    //       fname: preValue.fname,
    //     };
    //   }
    });
  };
  return (
    <div
      style={{
        backgroundColor: "#e6e6e6",
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <form onSubmit={(e) => getFormData(e)} style={{ padding: "30px" }}>
        <h1>new form data </h1>
        <p>
        <span>{fullname.fname}</span>
        <span>{fullname.lname}</span>
        </p>
        
        <input
          type="text"
          placeholder="enter yor name"
          name="fname"
          onChange={inputEvent}
          value={fullname.fname}
          style={{ width: "100%", boxSizing: "border-box", padding: "10px" }}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="enter your lastname"
          name="lname"
          onChange={inputEvent}
          value={fullname.lname}
          style={{ width: "100%", boxSizing: "border-box", padding: "10px" }}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="enter your email"
          name="email"
          onChange={inputEvent}
          style={{ width: "100%", boxSizing: "border-box", padding: "10px" }}
        />
        <br />
        <br />
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <br />
        <br />
        <input type="checkbox" />
        <span>accept term and condition</span>
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
