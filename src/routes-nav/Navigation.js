import React, { useContext } from "react";
import { Navbar, Nav, NavItem } from "reactstrap";
import { NavLink, useHistory } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "./Navigation.css";
import "./component.css";
import {TbHaze} from "react-icons/tb"

import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

import profily from '../img/user.png';
import logouty from '../img/logout.png';

import logo from '../img/logo.png';

// Navbar provides the navigation in the Navbar of the app.
// It will show navlinks based on whether a user is logged in or not.
// In order to determine this, it looks at the user profile's "isLoggedIn" status.
// If a user is logged in, the user will see the log out button, which will log the user 
// out from the session on the app script and will push them to the home page
// using windows history object. 


function Navigation({ logout }) {
  const { isLoggedIn } = useContext(UserContext);
  const history = useHistory();
  const handleClick = () => {
      logout();
      history.push("/");
    //   localStorage.clear();
  }

  return (
    <div>
        <Navbar expand="md">
            <NavLink exact to="/" className="nav p-2 m-3">
            <h3><img src={logo} alt="logo" style={{ height:'100px', width:'100px'}} /> </h3>
            </NavLink>
            <Nav className="ml-auto" navbar>
                {isLoggedIn
                ? (<>
                    <DropdownButton className="navbar-toggler" variant="warning" // id="dropdown-warning-button" 
                    data-toggle="collapse" title={ <h4><TbHaze/></h4> } data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" > 
                        <Dropdown.Item>
                        <NavLink to="/aboutus" className="nav" type="AboutUs"> 
                                <p> About Us </p>
                                </NavLink>
                        <NavLink to="/programs" className="nav" type="Programs"> 
                             <p> Programs for Kids & Adults </p>
                            </NavLink>
                            <NavLink to="/business" className="nav" type="Business"> 
                             <p> Business </p>
                            </NavLink>
                           <NavLink to="/publications" className="nav" type="Publications"> 
                             <p> Publications </p>
                            </NavLink>
                           <NavLink to="/contact" className="nav" type="Contact"> 
                             <p> Contact </p>
                            </NavLink>
                          <NavLink to="/profile" type="Profile"> 
                          <p>Profile</p> 
                          </NavLink>
                          <NavItem to="/">
                            <p>Logout</p>
                          </NavItem>
                        </Dropdown.Item>
                    </DropdownButton>
                    <div  className="collapse navbar-collapse" id="navbarSupportedContent">
                        <NavItem>
                            <NavLink to="/aboutus"
                            className="nav col-sm-3 col-sm-3 col-sm-6 col-sm-8 mx-auto my-2" type="AboutUs"> 
                                <h3> About Us </h3>
                                </NavLink>
                            </NavItem>
                        <NavItem>
                           <NavLink to="/programs"
                            className="nav col-sm-3 col-sm-3 col-sm-6 col-sm-8 mx-auto my-2" type="Programs"> 
                             <h3> Programs for Kids & Adults </h3>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink to="/business"
                            className="nav col-sm-3 col-sm-3 col-sm-6 col-sm-8 mx-auto my-2" type="Business"> 
                             <h3> Business </h3>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink to="/publications"
                            className="nav col-sm-3 col-sm-3 col-sm-6 col-sm-8 mx-auto my-2" type="Publications"> 
                             <h3> Publications </h3>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink to="/contact"
                            className="nav col-sm-3 col-sm-3 col-sm-6 col-sm-8 mx-auto my-2" type="Contact"> 
                             <h3> Contact </h3>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/profile" className="nav col-sm-3 col-sm-3 col-sm-6 col-sm-8 mx-auto my-2" type="Profile">  
                                <h3> 
                                <img src={profily} alt="profile" style={{ height:'30px', width:'30px'}} />
                                </h3>
                            </NavLink><span></span>
                        </NavItem>
                        <NavItem  to="/">
                            <h3 className="btn nav col-sm-3 col-sm-3 col-sm-6 col-sm-8 mx-auto my-2" onClick={handleClick} type="logout">
                                {/* <FaSignOutAlt /> Bye!  */}
                            <img src={logouty} alt="logout" style={{ height:'30px', width:'30px'}} />
                            </h3>
                        </NavItem>
                    </div>
                    </>) : (<>
                    <DropdownButton className="navbar-toggler" variant="warning" // id="dropdown-warning-button" 
                    data-toggle="collapse" title={ <h4><TbHaze/></h4> } data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" > 
                        <Dropdown.Item>
                        <NavLink to="/aboutus" className="nav" type="AboutUs"> 
                                <p> About Us </p>
                                </NavLink>
                        <NavLink to="/programs" className="nav" type="Programs"> 
                             <p> Programs for Kids & Adults </p>
                            </NavLink>
                            <NavLink to="/business" className="nav" type="Business"> 
                             <p> Business </p>
                            </NavLink>
                           <NavLink to="/publications" className="nav" type="Publications"> 
                             <p> Publications </p>
                            </NavLink>
                           <NavLink to="/contact" className="nav" type="Contact"> 
                             <p> Contact </p>
                            </NavLink>
                          <NavLink to="/weather" type="weather">  
                             <p> Weather</p>
                            </NavLink>
                          <NavLink to="/login" type="login"> 
                          <p> Login </p>
                          </NavLink>
                          <NavLink to="/signup" type="signup"> 
                          <p> Signup </p>
                          </NavLink>
                        </Dropdown.Item>
                    </DropdownButton>
                    <div  className="collapse navbar-collapse" id="navbarSupportedContent">
                    <NavItem>
                            <NavLink to="/aboutus" type="AboutUs"> 
                                <p> About Us </p>
                                </NavLink>
                            </NavItem>
                        <NavItem>
                           <NavLink to="/programs" type="Programs"> 
                             <p> Programs for Kids & Adults </p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink to="/business" type="Business"> 
                             <p> Business </p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink to="/publications" type="Publications"> 
                             <p> Publications </p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink to="/contact" type="Contact"> 
                             <p> Contact </p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/weather" type="weather">  
                            <p> Weather </p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/login" type="login" >
                            <p> Login </p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/signup" type="signup"> 
                            <p> Signup </p>
                            </NavLink>
                        </NavItem>
                    </div>
                </>)
                }
            </Nav>
        </Navbar>
    </div>
);
}

export default Navigation;
