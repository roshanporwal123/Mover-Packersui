import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { __userapiurl } from "../../API_URL";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("Indore");
  const [gender, setGender] = useState("");
  const [Output, setOutput] = useState("");

  const [errName, seterrName] = useState("");
  const [errEmail, seterrEmail] = useState("");
  const [errPassword, seterrPassword] = useState("");
  const [errPhone, seterrPhone] = useState("");
  const [errAddress, seterrAddress] = useState("");
  const [errCity, seterrCity] = useState("");
  const [errGender, seterrGender] = useState("");

  const HandleSubmit = () => {
    if (!name) return seterrName("Name is required");
    else seterrName("");

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) return seterrEmail("Email is required");
    else if (!emailRegex.test(email))
      return seterrEmail("Invalid email format");
    else seterrEmail("");

    if (!password) return seterrPassword("Password is required");
    else seterrPassword("");

    if (!phone) return seterrPhone("Phone is required");
    else seterrPhone("");

    if (!address) return seterrAddress("Address is required");
    else seterrAddress("");

    if (!city) return seterrCity("City is required");
    else seterrCity("");

    if (!gender) return seterrGender("Gender is required");
    else seterrGender("");

    const UserDetails = {
     "name" :name,
      "email":email,
      "password":password,
"mobile": phone,
      "address":address,
      "city":city,
      "gender":gender,
    };

    axios.post(__userapiurl + "save", UserDetails).then(() => {
        setOutput("Form Submitted Successfully ✅");
        setName("");
        setEmail("");
        setpassword("");
        setPhone("");
        setAddress("");
        setCity("Indore");
        setGender("");
      })
      .catch((err) => {
        console.log(err);
        setOutput("User registration failed ❌");
      });
  };

  return (<>  
    <div className="register-page">
      <div className="register-card">
        <h2>Register Here!!!!</h2>
        {Output && <div className="form-output">{Output}</div>}

        <div className="form-group">
          <label>Full Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <span className="error">{errName}</span>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <span className="error">{errEmail}</span>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <span className="error">{errPassword}</span>
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} />
          <span className="error">{errPhone}</span>
        </div>

        <div className="form-group">
          <label>Address</label>
          <input value={address} onChange={(e) => setAddress(e.target.value)} />
          <span className="error">{errAddress}</span>
        </div>

        <div className="form-group">
          <label>City</label>
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            <option>Indore</option>
            <option>Ujjain</option>
            <option>Bhopal</option>
            <option>Other</option>
          </select>
          <span className="error">{errCity}</span>
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input
                 name="gender"
                type="radio"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>

            <label>
              <input
                name="gender"
                type="radio"
                value="Female"
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>

            <label>
              <input
                name="gender"
                type="radio"
                value="Other"
                onChange={(e) => setGender(e.target.value)}
              />
              Other
            </label>
          </div>
          <span className="error">{errGender}</span>
        </div>

        <button className="register-btn" onClick={HandleSubmit}>
          Register
        </button>
      </div>
    </div>
    </>

  );
}

export default Register;
