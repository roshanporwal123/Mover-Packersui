import { useState } from "react";
import axios from 'axios'
import { __categoryapiurl, __userapiurl } from "../../API_URL"; 
import { useNavigate } from 'react-router-dom';  

function AddCategory(){

    const navigate=useNavigate();
    const [catnm, setCatnm]=useState();
    const [file, setFile]=useState(null);
    const [errcatnm, seterrCatnm]=useState();
    const [errcaticonnm, seterrCaticonnm]=useState();
    const [Output, setOutput]=useState();
    
    const HandleFile=(event)=>{
       setFile(event.target.files[0]);
    }
  const HandleSubmit =(event)=>{
      event.preventDefault();
      if (!catnm || !file)
      {
        setOutput("All fields are required");
        return;
      }
      const formdata= new FormData();
      formdata.append("catnm",catnm)
      formdata.append("caticon",file)
      
      axios.post(__categoryapiurl+"save",formdata,{
    headers:{
      'Content-Type':'multipart/form-data'
    }
  
  }).then((response)=>{
    setOutput("Category added successfull")
    setCatnm("")
      setFile(null);
      navigate("/addcategory");
  }).catch((error)=>{
    console.log(error);
    setOutput("Category Not added");
  })
  }

    return(
        <>
        <div id="content">
                <br />
                <center>
                 
                  <h1>Add Category Here.......</h1>
                  <br/>
                  <font color="blue">{Output} </font>
                  <form>
                    <label>Category Name</label>
                    <input onChange={(e) => setCatnm(e.target.value)} type='text' value={catnm} />
                    <font color="red"><h3>{errcatnm}</h3></font>
                    <br />
                      
                    <label>Upload File</label>
                    <input onChange={HandleFile} type='file'/>
                    <font color="red"><h3>{errcaticonnm}</h3></font>
                    <br />
                    <button onClick={HandleSubmit} type='button'>Add</button>
                  </form>
                           
                </center>
              </div>
        </>
    )
}
export default AddCategory;