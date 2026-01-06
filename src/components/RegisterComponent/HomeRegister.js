import React, { useState } from "react";
import './Register.css'
import axios from 'axios'

function HomeRegister() {
 
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [mobile,setMobile]=useState("");
  const [address,setAddress]=useState("");
  const [City,setCity]=useState("");
  const [gender,setGender]=useState("");
  const [Output,setOutput]=useState("");

  const HandleSubmit=(event)=>{
     
    const UserDetails={"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":City,"gender":gender }
        const url="http://localhost:3001/user/save";

    axios.post(url,UserDetails).then((e)=>{
         setOutput("Registration Success")
     setName("");
    setEmail("");
    setPassword("");
    setMobile("");
    setAddress("");
    setCity("");
    setGender("Male");
     }).catch((error)=>{
         setOutput("Registration Failed");
     })
  }
  return (
    <>
      <center>
           <form>
            <font color="green"> {Output}</font>
            <label>Name</label>
            <input onChange={(event)=>setName(event.target.value)}  type="text"  value={name} />
            <br/> <br/>
             <label>Email</label>
            <input onChange={(event)=>setEmail(event.target.value)}  type="email"  value={email} />
           
            <br/> <br/>
             <label>Password</label>
            <input onChange={(event)=>setPassword(event.target.value)}  type="password"  value={password} />
            
            <br/> <br/>
            <label>Phone</label>
            <input onChange={(event)=>setMobile(event.target.value)}  type="phone"  value={mobile} />
         
            <br/> <br/>
            <label>Address</label>
            <input onChange={(event)=>setAddress(event.target.value)}  type="text"  value={address} />
            <br/> <br/>
            <label>City</label>
            <select onChange={(event)=>setCity(event.target.value)}  value={City}>
             <option>Indore</option>
             <option>Ujjain</option>
             <option>Bhopal</option>
             <option>Other</option>
            </select>
              <br/> <br/>
              <label> Gender: </label>
              <label>
                 <input onChange={(event)=>setGender(event.target.value)}  type="radio" value="male" name="gender" />Male
              </label>
              <label>
                 <input onChange={(event)=>setGender(event.target.value)}  type="radio" value="female" name="gender"  />FemaleMale
              </label>
              <label>
                 <input onChange={(event)=>setGender(event.target.value)}  type="radio" value="other" name="gender"  />Other
              </label>
            <br/> <br/>
            <button onClick={HandleSubmit} type="button">Submit</button>
           </form>
      </center>
    </>
  );
}

export default HomeRegister;
