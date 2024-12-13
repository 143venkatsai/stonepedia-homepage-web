import { BsFillSendFill } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa6";

import "./index.css";

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-top">
      <img
        src="https://stonepedia.in/wp-content/uploads/2024/10/white-logo.png"
        alt="footer logo"
        className="footer-logo"
      />
      <div className="footer-input-container">
        <input
          type="email"
          placeholder="Your Email Address"
          className="footer-input"
          required
        />
        <BsFillSendFill className="footer-icon" />
      </div>
    </div>
    <div className="footer-content">
      <div className="footer-element">
        <h3>Product</h3>
        <p>StonePedia Exclusive</p>
        <p>Best seller</p>
        <p>Premium Stones</p>
        <p>Shop By Color</p>
        <p>Shop By Category</p>
        <p>Applications</p>
        <p>Customer Review</p>
      </div>
      <div className="footer-element">
        <h3>Support</h3>
        <p>Request For Quotation</p>
        <p>FAQs</p>
        <p>Blogs</p>
        <p>Help Center</p>
        <p>Login</p>
        <p>Signup</p>
        <p>Report Complaints</p>
      </div>
      <div className="footer-element">
        <h3>Company</h3>
        <p>About Us</p>
        <p>Carrier</p>
        <p>Terms & Condition</p>
        <p>Privacy Policy</p>
        <p>Cookies Policy</p>
        <p>Cacellation Policy</p>
        <p>Disclaimer</p>
      </div>
      <div className="footer-element">
        <h3>Reach Us</h3>
        <p>In The Press</p>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>LinkedIn</p>
        <p>Youtube</p>
        <p>Feedback</p>
        <p>Partner With Us</p>
      </div>
    </div>
    <div className="footerbottom">
      <hr className="footer-line" />
      <h6 className="web-rights">
        Copyright <FaRegCopyright className="copy-icon" /> 2024 - StonePedia
        Private limited. All Rights Reserved.
      </h6>
    </div>
  </footer>
);

export default Footer;
