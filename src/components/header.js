import React from "react";
import ReactDOM from "react-dom";
import Service from "./services";
import About from "./about";
import Gallary from "./gallary";
import News from "./news";
import Contact from "./contactus";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Header() {
  return (
    <div className="main-top" id="home">
      <header>
        <div className="container-fluid">
          <div className="header-wthree-top-w3layouts d-md-flex justify-content-between align-items-center py-3 px-xl-5 px-lg-3 px-2">
            <h1 className="logo">
              <a href="index.html">AORHR</a>
            </h1>
            <ul id="menu">
              <li>
                <input id="check02" type="checkbox" name="menu" />
                <label htmlFor="check02">
                  <span className="fa fa-bars" aria-hidden="true"></span>
                </label>
                <ul className="submenu">
                  <li>
                    <Link to="/" className="active">Home</Link>
                  </li>
                  <li>
                    <Link to="/Service">Service</Link>
                  </li>
                  <li>
                    <Link to="/About">About</Link>
                  </li>
                  <li>
                    <Link to="/Gallary">Gallary</Link>
                  </li>
                  <li>
                    <Link to="/News">News</Link>
                  </li>
                  <li>
                    <Link to="/Contact">Contact</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Header;
