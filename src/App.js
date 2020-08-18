import React from 'react';
import logo from './logo.svg';
import Footer from './components/footer';
import Header from './components/header';
import Service from './components/services';
import About from './components/about';
import Gallary from './components/gallary';
import News from './components/news';
import Contact from './components/contactus';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';
import './css/bootstrap.css';
import './css/css_slider.css';
import './style.css';
import './css/font-awesome.min.css';
import HomeBanner from './components/homeBanner';


function App() {
  return (
    <Router>
    <div >
      <Header/>
        <HomeBanner/>
        <hr/>
        <Switch>
          <Route path="/Service">
            <Service />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Gallary">
            <Gallary />
          </Route>
          <Route path="/News">
            <News />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
        <hr/>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
