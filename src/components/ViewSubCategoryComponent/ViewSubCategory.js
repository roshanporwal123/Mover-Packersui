import { useEffect, useState } from "react";
import axios from 'axios'
import { __categoryapiurl, __userapiurl,__subcategoryapiurl } from "../../API_URL";
import { useNavigate } from 'react-router-dom';
import { Link,useParams } from "react-router-dom";
import './ViewSubCategory.css'

function ViewSubCategory() {
     const params=useParams();
    const [SubCategoryList,setSubCategoryList]=useState([]);
         
   useEffect((response)=>{   
     axios.get(__subcategoryapiurl+"fetch",{  
      params:{"catnm":params.cnm}  
     }).then((response)=>{  
           setSubCategoryList(response.data);   
    }).catch((err)=>{   
      console.log(err);   
    })    
   },[])     
   
 return (
  <div className="user-subcategory-page">
    <h1 className="page-title">Explore Sub Categories</h1>

    <div className="subcategory-grid">
      {SubCategoryList.map((row) => (
        <div className="subcategory-card" key={row._id}>
          <Link className="subcategory-link">

            <div className="subcategory-image">
              <img
                src={`/assets/uploads/subcaticons/${row.subcaticonnm}`}
                alt={row.subcatnm}
              />
            </div>

            <div className="subcategory-content">
              <h2>{row.subcatnm}</h2>
              <span className="view-text">Explore →</span>
            </div>

          </Link>
        </div>
      ))}
    </div>
  </div>
);

}
export default ViewSubCategory;