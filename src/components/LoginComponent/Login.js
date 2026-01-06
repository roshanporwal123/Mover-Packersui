import { useState,useRef } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { __userapiurl } from '../../API_URL';
import ReCAPTCHA from "react-google-recaptcha";


function Login() {

  const navigate = useNavigate();
  const captchaRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Output, setOutput] = useState("");
  const [errEmail, seterrEmail] = useState("");
  const [errPassword, seterrPassword] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [errCapcha, seterrCapcha] = useState("");



  const HandleSubmit = () => {
    if (!email) return seterrEmail("Email is required");
    else seterrEmail("");

    if (!password) return seterrPassword("Password is required");
    else seterrPassword("");


    if (!captchaToken) {
      return seterrCapcha("Please verify captcha");
    } else seterrCapcha("");

    const UserDetails = {
      email: email,
      password: password,
    };

    axios.post(__userapiurl + "login", UserDetails)
      .then((response) => {
        const users = response.data.users;

        localStorage.setItem("name", users.name);
        localStorage.setItem("email", users.email);
        localStorage.setItem("mobile", users.mobile);
        localStorage.setItem("address", users.address);
        localStorage.setItem("city", users.city);
        localStorage.setItem("gender", users.gender);
        localStorage.setItem("role", users.role);
        localStorage.setItem("info", users.info);

        users.role === "admin"
          ? navigate("/admin")
          : navigate("/users");

        
      })
      .catch(() => {
        setOutput("Login failed invalid or verify account");
      
      });

  };
   return (<>  
    <div className="register-page">
      <div className="register-card">
        <h2>Login Here!!!!</h2>
        {Output && <div className="form-output">{Output}</div>}

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
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="error">{errPassword}</span>
        </div>
        
            <ReCAPTCHA
           
              sitekey="6LfODiQsAAAAAPwoi8ihtzT3JdxKylDwqQLy1Hip"
              onChange={(token) => {
                setCaptchaToken(token);
                seterrCapcha("");
              }}
            />
            <font color="red"><h3>{errCapcha}</h3></font>
        <button className="register-btn" onClick={HandleSubmit}>
          Login 
        </button> 
      </div>  
    </div>

    
    </>
  );
}
export default Login; 