import React from 'react'
import {Link} from 'react-router-dom';

import "../pages/Navbar.css"

const Navbar =()=> {
    return(
          <nav className="navbar navbar-expand-md navbar-inverse site-nav fixed-top py-0" id="navbar">
          <div className="container-fluid">

               <Link className="navbar-brand" to="/home.js">
                    <img src={require('../image/kyazoonga.png')} alt="logoImg" />
               </Link>

               <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
               </button>
          <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right ml-auto">          
               <li className="nav-item">
                    <Link className="nav-Link" to="/Signup">Sign up</Link>
               </li> 
               <li className="nav-item">
                    <Link className="nav-Link" to={"About"}>Sign In</Link>
               </li>
               <li className="nav-item">
                    <Link className="nav-Link" to="/contact.js"><i className="fa fa-shopping-basket" aria-hidden="true"></i><span className="badge">4</span></Link>
               </li>
               <li className="nav-item">
                    <Link className="nav-Link" to="/share.js"><i className="fa fa-bell" aria-hidden="true"></i><span className="badge">10</span></Link>
               </li>
               <li className="nav-item">
                    <Link className="nav-Link" to="/share.js"><button className="btn btn-primary">Ticket Your Event </button></Link>
               </li>
          <div className="menubar">
               <li className="nav-item">
                    <Link className="nav-Link" to="/home.js">CONCERTS</Link>
               </li>
               <li className="nav-item">
                    <Link className="nav-Link" to="/home.js">CRICKET</Link>
               </li>
               <li className="nav-item">
                    <Link className="nav-Link" to="/home.js">EVENTS</Link>
               </li>
               <li className="nav-item">
                    <Link className="nav-Link" to="/home.js">SPORTS</Link>
               </li>
               <li className="nav-item">
                    <Link className="nav-Link" to="/home.js">AMUSEMENT PARKS</Link>
               </li>
               <li className="nav-item">
                    <Link className="nav-Link" to="/home.js">RESTAURANTS</Link>
               </li> 
               <li className="nav-item">
                    <Link className="nav-Link" to="/home.js">THEATRE & ARTS</Link>
               </li> 
               <li className="nav-item">
                    <Link className="nav-Link" to="/home.js">PARTIES</Link>
               </li> 
          </div>
          </ul>
          </div>

     </div> 
</nav>
);    
}
export default Navbar;