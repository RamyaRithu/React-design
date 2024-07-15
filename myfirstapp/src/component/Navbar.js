import React from "react";
import Footer from "./Footer";
import Logo from "./Logo";
import {NavLink,Outlet,Link} from "react-router-dom";


const styleBorder = {
  // border: "1px solid red",
  
  background: "#fff",
};

let number = 1;
let stringName = "Software Developer";


/**class  based component */
class Navbar extends React.Component {
  /**Whenever class  called Constructor excutes */
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div
      className="col-md-12"
      style={{
        // backgroundImage: `url(${BGImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
     
      <div className="row" style={styleBorder}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <div className="container-fluid">
            <a className="navbar-brand h1" href="#">
              <Logo/> 
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse  d-flex justify-content-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About Us
                  </NavLink>
                </li>
               
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact us
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex ">
                <div className="d-flex justify-content-end">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
                </div>
              </form>
            </div>
          </div>
        </nav>
        </div>
        </div>
         
        <Outlet/>
        
<div className="row mt-5 container-fluid"  >
        <Footer/>
        </div>
      </div>

    );
  }
}

export default Navbar;
