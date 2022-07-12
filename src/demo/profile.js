import React from "react";
// const Profile=()=>{
//     const test=()=>{
//         alert("hello")
//     }
//     return(
//         <div>
//             <h1>profile</h1>
//             <button onClick={test}>clickme</button>
//         </div>
//     )
// }
let curDate = new Date();
curDate = curDate.getHours();
let greeting = '';
const cssStyle = { };
if (curDate >= 1 && curDate < 12 ){
  greeting ="good morning"
  cssStyle.color = 'green';
}else if( curDate >= 12 && curDate < 19){
  greeting ='good after noon'
  cssStyle.color = 'orange';
}else
{
  greeting = 'good night'
  cssStyle.color = 'brown';
}
const Profile=()=>{
    return<>
        <h1>{MyFun2()} Hello {MyFun()}</h1>
        
    </>
}
const MyFun=()=>{
    return<>
        <h1>MyFUn1</h1>
    </>
}
const MyFun2=()=>{
    return<>
        <h1>Myfun2</h1>
    </>
}
 export default Profile
