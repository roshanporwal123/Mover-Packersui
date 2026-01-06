import React, { useState, useEffect} from "react";
import "./AddConsignment.css";
import axios from 'axios'
import {__categoryapiurl, __subcategoryapiurl,__consignmentapiurl} from '../../API_URL'
import { Link,useParams ,useNavigate} from "react-router-dom";




function AddConsignment() {
  
  const params=useParams()
      const navigate=useNavigate();
      const [catnm, setCatnm] = useState();
     const [subcatnm, setSubCatnm] = useState();
  const [currentLocation, setCurrentLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [description, setDescription] = useState("");
    const [email,setEmail]=useState(localStorage.getItem("email"))    
  const [output, setOutput] = useState("");
   const [cDetails, setcDetails] = useState([])
   const [scDetails, setscDetails] = useState([])
 

  useEffect(() => {
    axios.get(__categoryapiurl + "fetch").then((response) => {
      console.log(response.date);
      setcDetails(response.data);
    })
  }, []);

 useEffect((response)=>{   
     axios.get(__subcategoryapiurl+"fetch",{  
      params:{"catnm":catnm}  
     }).then((response)=>{  
           setscDetails(response.data);   
    }).catch((err)=>{   
      console.log(err);   
    })    
   },[catnm])  

  const HandleSubmit = (e) => {
    e.preventDefault();
   
    if(!catnm || !subcatnm ||!currentLocation ||!destination||!description )
    {
      setOutput("All Fields Are Required ");
      return;
    }
    const Details ={"email":email,"category":catnm,"subcategory":subcatnm,"pickup_location":currentLocation,"destination":destination,"descrition":description}
       
    axios.post(__consignmentapiurl+"save",Details).then((response)=>{
      setOutput("Consignment added successfully 🚚");
      setCatnm("");
      setSubCatnm("")
      setCurrentLocation("")
      setDescription("")
      setDestination("");
    })

  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>Add Consignment!!!</h2>
        {output && <div className="form-output">{output}</div>}

        <form>

         <div className="form-group">
          <label>Select Category</label>
            <select onChange={e => setCatnm(e.target.value)} value={catnm}>
              <option>-- Select Category --</option>
              {
                cDetails.map((row) => (
                  <option key={row._id} value={row.catnm}>{row.catnm}</option>
                ))
              }
            </select>
       </div>

        <div className="form-group">
          <label>Select SubCategory</label>
            <select onChange={e => setSubCatnm(e.target.value)} value={subcatnm}>
              <option>-- Select SubCategory --</option>
              {
                scDetails.map((row) => (
                  <option key={row._id} value={row.subcatnm}>{row.subcatnm}</option>
                ))
              }
            </select>
       </div>
          {/* FROM */}
          <div className="form-group">
            <label>From (Current Location)</label>
            <input
              type="text"
              placeholder="Enter pickup location"
              value={currentLocation}
              onChange={(e) => setCurrentLocation(e.target.value)}
            />
          </div>

          {/* TO */}
          <div className="form-group">
            <label>To (Destination)</label>
            <input
              type="text"
              placeholder="Enter delivery destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          {/* DESCRIPTION */}
          <div className="form-group">
            <label>Description About Consignment</label>
            <textarea
              placeholder="Describe items, weight, fragile details, etc."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="5"
            />
          </div>

          {/* SUBMIT */}
          <button type="button" onClick={HandleSubmit} className="register-btn">
            Add Consignment
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddConsignment;
