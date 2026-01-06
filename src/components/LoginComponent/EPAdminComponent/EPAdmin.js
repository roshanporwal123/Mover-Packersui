import axios from "axios";
import { useEffect, useState } from "react";
import { __userapiurl } from "../../API_URL";


function EPAdmin(){

    
      const [name, setName] = useState('')
      const [email, setEmail] = useState(localStorage.getItem("email"))
      const [password, setpassword] = useState('')
      const [phone, setPhone] = useState('')
      const [address, setAddress] = useState('')
      const [city, setCity] = useState('')
      var [gender, setGender] = useState('')
      const [Output, setOutput] = useState("")
    

      useEffect(()=>{
           
          axios.get(__userapiurl+"fetch",{
        params:{"email":email}
      }).then((result)=>{
        const data=result.data;
         setName(data[0].name);
         setPhone(data[0].mobile);
         setAddress(data[0].address);
         setCity(data[0].city);
         setGender(data[0].gender);
      })
      },[])
    
     
      const HandleSubmit = (event) => {

        axios.patch(__userapiurl+"update",{
          "condition_obj":{"email":email},"content_obj":{"name":name,"mobile":phone,"city":city,"address":address,"gender":gender}
        }).then((result)=>{
          alert("Profile Updated Successfull")
        })
       };
      
    
    return(
  <>
   <center>
        <br/>
        <div><h2 >Edit Profile Here.....</h2></div>

        <form  >
          <font color="blue"> {Output}</font>
            <br/>
          <div >
            <label >Full Name</label>
            <input type="text" onChange={(event) => setName(event.target.value)} value={name} />
          </div>
          <br/><br/>
          <div >
            <label >Phone</label>
            <input type="phone" onChange={(event) => setPhone(event.target.value)} value={phone} />
          </div>
          <br/><br/>
          <div >
            <label >Address</label>
            <input type="text" onChange={(event) => setAddress(event.target.value)} value={address} />
          </div>
          <br/><br/>
          <div >
            <label >City</label>
            <select onChange={(event) => setCity(event.target.value)} value={city}>
              <option disabled>Select City</option>
              <option selected>Indore</option>
              <option>Ujjain</option>
              <option>Bhopal</option>
              <option>Other</option>
            </select>
          </div>
          <br/><br/>
          <div>
            <label>Gender:</label>

            <label>
              <input onChange={(event) => setGender(event.target.value)}  type="radio" name="gender" value='Male' checked={gender === "Male"} /> Male
            </label>

            <label>
              <input onChange={(event) => setGender(event.target.value)} type="radio" name="gender" value="Female"/> Female
            </label>

            <label>
              <input onChange={(event) => setGender(event.target.value)} type="radio" name="gender" value="other" /> Other
            </label>
          </div>
          <br/>
          <button onClick={HandleSubmit} type="button" >
            Update Profile
          </button>
          <br/><br/>
        </form>
      </center>
  </>
  );
}

export default EPAdmin;

