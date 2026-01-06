import { useEffect, useState } from "react";
import axios from 'axios'
import { __categoryapiurl, __userapiurl, __subcategoryapiurl } from "../../API_URL";
import { useNavigate } from 'react-router-dom';

function AddSubCategory() {

  const navigate = useNavigate();
  const [catnm, setCatnm] = useState();
  const [subcatnm, setSubCatnm] = useState();
  const [file, setFile] = useState(null);
  const [errcatnm, seterrCatnm] = useState();
  const [errcaticonnm, seterrCaticonnm] = useState();
  const [Output, setOutput] = useState();
  const [cDetails, setcDetails] = useState([])


  useEffect(() => {
    axios.get(__categoryapiurl + "fetch").then((response) => {
      console.log(response.date);
      setcDetails(response.data);
    })
  }, []);

  const HandleFile = (event) => {
    setFile(event.target.files[0]);
  }
  const HandleSubmit = (event) => {
    event.preventDefault();
    if (!catnm || !subcatnm || !file) {
      setOutput("All fields are required");
      return;
    }
    const formdata = new FormData();
    formdata.append("catnm", catnm)
    formdata.append("subcatnm", subcatnm)
    formdata.append("caticon", file)

    axios.post(__subcategoryapiurl + "save", formdata, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }

    }).then((response) => {
      setOutput("SubCategory added successfull")
      setCatnm("");
      setSubCatnm("")
      setFile(null);
      navigate("/addsubcategory");
    }).catch((error) => {
      console.log(error);
      setOutput("SubCategory Not added");
    })
  }

  return (
    <>
      <div id="content">
        <br />
        <center>
          <h1>Add SubCategory Here.......</h1>
          <br />
          <font color="blue">{Output} </font>
          <form>
            <label>Category Name</label>
            <select onChange={e => setCatnm(e.target.value)} value={catnm}>
              <option>Select Category</option>
              {
                cDetails.map((row) => (
                  <option key={row._id} value={row.catnm}>{row.catnm}</option>
                ))
              }
            </select>
            <font color="red"><h3>{errcatnm}</h3></font>
            <br />

            <label>SubCategory Name</label>
            <input onChange={(e) => setSubCatnm(e.target.value)} type='text' value={subcatnm} />
            <font color="red"><h3>{errcatnm}</h3></font>
            <br />

            <label>Upload File</label>
            <input onChange={HandleFile} type='file' />
            <font color="red"><h3>{errcaticonnm}</h3></font>
            <br />

            <button onClick={HandleSubmit} type='button'>Add</button>

          </form>

        </center>
      </div>
    </>
  )
}
export default AddSubCategory;