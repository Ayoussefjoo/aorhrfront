import React from "react";
function Contact() {
  return (
    <div>
      <div className="contact py-5" id="mail">
        <div className="container py-xl-5 py-lg-3">
          <h3 className="tittle mb-sm-5 mb-4 text-bl text-center font-weight-bold">
            Mail Us
          </h3>
          <form action="#" method="post" className="pt-xl-4">
            <div className="row">
              <div className="col-md-6 contact-left">
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  required=""
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  required=""
                />
                <input
                  type="text"
                  name="Mobile Number"
                  placeholder="Mobile Number"
                  required=""
                />
              </div>
              <div className="col-md-6 contact-right mt-md-0 mt-4">
                <textarea
                  name="Message"
                  placeholder="Message"
                  required=""
                ></textarea>
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            </div>
          </form>
          <div className="row map-pos mt-5 pt-lg-5">
            <div className="col-lg-4 address-row">
              <div className="row">
                <div className="col-3 address-left text-center">
                  <span className="fa fa-map-marker"></span>
                </div>
                <div className="col-9 address-right">
                  <h5>Visit Us</h5>
                  <p>Bmr St, Canada, New York, USA</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 address-row w3-agileits my-lg-0 my-4">
              <div className="row">
                <div className="col-3 address-left text-center">
                  <span className="fa fa-envelope-o"></span>
                </div>
                <div className="col-9 address-right">
                  <h5>Mail Us</h5>
                  <p>
                    <a href="mailto:info@example.com"> mail@example.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 address-row">
              <div className="row">
                <div className="col-3 address-left text-center">
                  <span className="fa fa-phone"></span>
                </div>
                <div className="col-9 address-right">
                  <h5>Call Us</h5>
                  <p>+01 222 333 4444</p>
                </div>
              </div>
            </div>
          </div>
    
        </div>
      </div>
    </div>
  );
}
export default Contact;
