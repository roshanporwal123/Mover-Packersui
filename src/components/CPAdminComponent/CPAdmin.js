import axios from "axios";
import { useState } from "react";
import { __userapiurl } from "../../API_URL";
import { useNavigate } from "react-router-dom";


function CPAdmin() {

    const navigate = useNavigate();
    const [Opassword,setOldPassword]=useState()
    const [email,setEmail]=useState(localStorage.getItem("email"))
    const [Npassword,setNewPassword]=useState()
    const [CNpassword,setConfirmNewPassword]=useState()
    const [Output,setOutput]=useState()
        
    const HandleSubmit=(result)=>{
         axios.get(__userapiurl+"fetch",{
        params:{"email":email,"password":Opassword}
    }).then((result)=>{
        if(Npassword==CNpassword)
        {
            axios.patch(__userapiurl+"update",{
          "condition_obj":{"email":email},"content_obj":{"password":CNpassword}
        }
        ).then(()=>{
            alert("Password Updated Successfull");
            navigate("/logout");
        })
        }
        else{
            setOutput("New Password And Confirm New Password Missmatch...")
            setNewPassword("");
            setConfirmNewPassword("");
        }
    }).catch((error)=>{
       setOutput("invalid Old Password");
       setOldPassword("");
    })
    }


    return(
        <>
        
<div id="content" >
  <br/>
  
  <center> 
    <font color="blue">{Output}</font>
     <h1>Change Password Here.......</h1>
  
  <form>
     <label>Old Password</label>
    <input onChange={(event)=>setOldPassword(event.target.value)}  type='password' value={Opassword}/>
      <label>New Password</label>
    <input onChange={(event)=>setNewPassword(event.target.value)}  type='password' value={Npassword}/>
   <label>Confirm New Password</label>
    <input onChange={(event)=>setConfirmNewPassword(event.target.value)}  type='password' value={CNpassword}/>
 
    <button onClick={HandleSubmit} type='button'>Update Password</button>
  </form>
  
  </center>

</div>

</>
  );
}

export default CPAdmin;



