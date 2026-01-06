import './Header.css';
import { NavLink } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Auth from '../AuthComponent/Auth';


function Header() {

  const [ NavContent , setNavContent ] = useState();

  useEffect(()=>{
    setInterval(()=>{
    if(localStorage.getItem("token") !== undefined && localStorage.getItem("role")==="admin")
    {
      setNavContent(
          <>
            
           <div className="sub-header">
                  <div className="container sub-header-row">
                    <ul className="info">
                      <li><i className="fa fa-envelope"></i> Moving@company.com</li>
                      <li><i className="fa fa-map"></i>All Over India</li>
                    </ul>
          
                    <ul className="social-links">
                      <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
          
                <header className="header-area">
                  <div className="container">
                    <nav className="main-nav">
                      <NavLink to="/" className="logo">Movers And Packers</NavLink>
          
                      <ul className="nav">
                        <li><NavLink to="/admin" end>Admin Home</NavLink></li>
                        <li><NavLink to="/manageusers">ManageUsers</NavLink></li>
                        <li><NavLink to="/addcategory">AddCategory</NavLink></li>
                        <li><NavLink to="/addsubcategory">Addsubcategory</NavLink></li>
                        <li><NavLink to="/epadmin"> EditProfile</NavLink></li>
                        <li><NavLink to="/cpadmin"> Change Password</NavLink></li>
                        <li>
                          <NavLink to="/logout">
                            <i className="fa fa-calendar"></i> Logout
                          </NavLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </header>
                        
      </>);     
    }
    else if(localStorage.getItem("token") !== undefined && localStorage.getItem("role")==="user")
    {
      setNavContent(<>
          
           <div className="sub-header">
                  <div className="container sub-header-row">
                    <ul className="info">
                      <li><i className="fa fa-envelope"></i> Moving@company.com</li>
                      <li><i className="fa fa-map"></i>All Over India</li>
                    </ul>
          
                    <ul className="social-links">
                      <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                  </div>
                </div>
          
                <header className="header-area">
                  <div className="container">
                    <nav className="main-nav">
                      <NavLink to="/" className="logo">Movers And Packers</NavLink>
          
                      <ul className="nav">
                        <li><NavLink to="/users" end>User Home</NavLink></li>
                        <li><NavLink to="/viewcategory">Search</NavLink></li>
                        <li><NavLink to="/charity">Charity</NavLink></li>
                        <li><NavLink to="/epuser">EditProfile</NavLink></li>
                        <li><NavLink to="/cpuser"> Change Password</NavLink></li>
                        <li>
                          <NavLink to="/logout">
                            <i className="fa fa-calendar"></i> Logout
                          </NavLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </header>

      </>);      
    }      
    else
    {
      setNavContent(<>
            <div className="sub-header">
                   <div className="container sub-header-row">
                     <ul className="info">
                       <li><i className="fa fa-envelope"></i> Moving@company.com</li>
                       <li><i className="fa fa-map"></i>All Over India</li>
                     </ul>
           
                     <ul className="social-links">
                       <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                       <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                       <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                       <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                     </ul>
                   </div>
                 </div>
           
                 <header className="header-area">
                   <div className="container">
                     <nav className="main-nav">
                       <NavLink to="/" className="logo">Movers And Packers</NavLink>
           
                       <ul className="nav">
                         <li><NavLink to="/" end>Home</NavLink></li>
                         <li><NavLink to="/about">About</NavLink></li>
                         <li><NavLink to="/contact">Contact</NavLink></li>
                         <li><NavLink to="/service">Service</NavLink></li>
                         <li><NavLink to="/register">Register</NavLink></li>
                         <li>
                           <NavLink to="/login">
                             <i className="fa fa-calendar"></i> Login Here
                           </NavLink>
                         </li>
                       </ul>
                     </nav>
                   </div>
                 </header>
      </>);
    }
    },1000);
  },[]);

  return (

<>
<Auth/>
{ NavContent }</>
  );
}

export default Header;