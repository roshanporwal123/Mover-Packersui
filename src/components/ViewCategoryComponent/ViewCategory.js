import { useState, useEffect } from "react";
import axios from 'axios'
import { __categoryapiurl, __userapiurl } from "../../API_URL";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import './ViewCategory.css'

function ViewCategory() {

  const [CategoryList, setCategoryList] = useState([]);
  useEffect(() => {
    axios.get(__categoryapiurl + "fetch").then((response) => {
      setCategoryList(response.data);

    }).catch((err) => {
      console.log(err);
    })
    
  }, [])
 return (
  <div className="user-category-page">
    <h1 className="page-title">Explore Our Categories</h1>

    <div className="category-grid">
      {CategoryList.map((row) => (
        <div className="category-card" key={row._id}>
          <Link to={`/searchsc/${row.catnm}`} className="category-link">
            
            <div className="category-image">
              <img
                src={`/assets/uploads/caticons/${row.caticonnm}`}
                alt={row.catnm}
              />
            </div>

            <div className="category-content">
              <h2>{row.catnm}</h2>
              <span className="view-text">View Subcategories →</span>
            </div>

          </Link>
        </div>
      ))}
    </div>
  </div>
);

}
export default ViewCategory;