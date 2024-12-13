import React from "react";

import "./index.css";

const Form = () => (
  <div className="form-slider-container">
    <div className="slider-left animate__animated animate__fadeInLeft">
      <h5 className="slider-title">TESTIMONIALS</h5>
      <h1 className="slider-heading">What Our Happy Clients Say About Us</h1>
      <div className="slider-view">
        <i class="bi bi-person-circle"></i>
        <h5 className="slider-name">Dev Patel</h5>
        <p className="slider-date">1 month ago</p>
        <p className="slider-message">
          Thanks for understanding our requirement and sourcing the best our
          project. appreciate the whole StonePedia Team.
        </p>
      </div>
      <button className="slider-btn">
        view more
        <i class="bi bi-arrow-right m-2"></i>
      </button>
    </div>
    <div className="form-container animate__animated animate__fadeInRight">
      <h5 className="form-title">HAPPY TO CONSULT</h5>
      <h1 className="form-heading">Book consultation now</h1>
      <p className="form-text">
        Our dedicated team will gt back to you within next 24 hours
      </p>
      <div className="form-name-field">
        <input
          type="text"
          placeholder="First Name"
          className="input-element element first-name"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input-element element"
          required
        />
      </div>
      <input
        type="text"
        placeholder="Company Name"
        className="input-element"
        required
      />
      <textarea
        type="text"
        placeholder="Write Your Message"
        className="input-element"
        required
      ></textarea>
      <div>
        <button className="form-btn">SUBMIT REQUEST</button>
      </div>
    </div>
  </div>
);

export default Form;
