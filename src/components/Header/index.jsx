import { FaShoppingCart } from "react-icons/fa";

import "./index.css";

const Header = () => (
  <nav className="navbar fixed-top bg-white" id="HomePage">
    <div className="container">
      <a className="navbar-brand" href="#HomePage">
        <img
          src="https://stonepedia.in/wp-content/uploads/2024/10/logoo.png"
          alt="wesbite"
          width="190"
          height="50"
        />
      </a>
      <div className="d-flex m-auto">
        <ul className="nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link nav-item-lg" href="#HomePage">
              SHOP BY CATEGORY
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav-item-lg" href="#HomePage">
              PARTNER WITH US
            </a>
          </li>
        </ul>
      </div>
      <div className="form-search-container">
        <form className="d-flex mt-3" role="search">
          <input
            className="form-control mb-3 p-2"
            type="search"
            placeholder="Search for products..."
            aria-label="Search"
          />
        </form>

        <button
          className="bg-white m-2 btn-nav"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasCart"
          aria-controls="offcanvasCart"
          aria-label="Toggle navigation"
        >
          <FaShoppingCart className="cart-icon " />
          <span class="position-absolute translate-middle badge rounded-pill bg-danger px-1">
            0<span class="visually-hidden"></span>
          </span>
        </button>
      </div>
      <button
        className="bg-white btn-nav"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon menu-icon"></span>
      </button>

      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasCart"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5> Your Cart 0</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <hr className="horizontal-line" />
        <div className="offcanvas-body">
          <p className="">No products in the cart</p>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <img
            src="https://stonepedia.in/wp-content/uploads/2024/10/logoo.png"
            alt="wesbite logo"
            width="120"
            height="35"
          />
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <h5 className="nav-link menu-nav-heading" aria-current="page">
                Your Trusted Global Stone Marketplace
              </h5>
            </li>
            <li className="nav-item">
              <p className="nav-link menu-nav-para" aria-current="page">
                At StonePedia, We are redefining the future. StonePedia is an
                award wining platform simplifying the purchase of the world's
                finest stone through certified and verified quarry owners and
                stone processing units across the globe.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
