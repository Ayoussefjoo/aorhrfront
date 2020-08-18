import React from "react";
import ReactDom from "react-dom";
import service1logo from '../images/ab1.jpg';
import service2logo from '../images/ab2.jpg';
import service3logo from '../images/ab3.jpg';

function Services() {
  return (
    <div className="popular-wthree py-5" id="about">
      <div className="container py-xl-5 py-lg-3">
        <h3 className="tittle mb-sm-5 mb-4 text-bl text-center font-weight-bold">
          Welcome to Doggo Website
        </h3>
        <div className="row py-xl-4 text-center">
          <div className="col-sm-4 popular-wthree-grid">
            <img src={service1logo} className="img-fluid" alt="" />
            <div className="popular-wthree-text">
              <h5>Beautiful</h5>
            </div>
          </div>
          <div className="col-sm-4 popular-wthree-grid my-sm-0 my-4">
            <img src={service2logo} className="img-fluid" alt="" />
            <div className="popular-wthree-text">
              <h5>Love</h5>
            </div>
          </div>
          <div className="col-sm-4 popular-wthree-grid">
            <img src={service3logo} className="img-fluid" alt="" />
            <div className="popular-wthree-text">
              <h5>Care</h5>
            </div>
          </div>
        </div>
        <div className="row py-xl-4 text-center">
          <div className="col-sm-4 popular-wthree-grid">
            <img src={service1logo} className="img-fluid" alt="" />
            <div className="popular-wthree-text">
              <h5>Beautiful</h5>
            </div>
          </div>
          <div className="col-sm-4 popular-wthree-grid my-sm-0 my-4">
            <img src={service2logo} className="img-fluid" alt="" />
            <div className="popular-wthree-text">
              <h5>Love</h5>
            </div>
          </div>
          <div className="col-sm-4 popular-wthree-grid">
            <img src={service3logo} className="img-fluid" alt="" />
            <div className="popular-wthree-text">
              <h5>Care</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
