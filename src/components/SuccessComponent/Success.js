import { useEffect, useState } from 'react';
import { href, useNavigate,useParams} from 'react-router-dom';
import './Success.css';
import axios from 'axios';
import { __paymentapiurl } from '../../API_URL';


function Success() {
  const [details,setDetails]=useState([])
  const params=useParams()
  const navigate = useNavigate();
  axios.get(__paymentapiurl+"fetch",{
  params:{"email":params.uid,"amount":params.amt}  
  }).then((response)=>{
 setDetails(response.data);
  })

    // 
 
  return (
  <>  
    <center>
        

      <div id="templatemo_content_wrapper">
        <div id="templatemo_content">
            <h2> Payment completed</h2>
            {
              details.map((row)=>(
                <h1>{row.amount}</h1>
              ))
            }
      <h3>Charity Done Successfully....</h3>
        </div>
      </div>
        </center>
  </>
  );
}

export default Success;



