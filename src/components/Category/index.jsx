import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

const Category = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const settingsSmall = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="category-container">
        <div className="category-section">
          <div className="category-left">
            <h5 className="category-title">WHAT WE OFFER?</h5>
            <h1 className="category-heading">Choose By Category</h1>
          </div>
          <button className="category-btn">
            view more
            <i class="bi bi-arrow-right m-2"></i>
          </button>
        </div>
      </div>
      <hr className="category-line" />
      {/* larger slider */}
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slider-card">
            <img
              src="https://www.marbleindian.com/wp-content/uploads/2018/09/INDIAN-STATUARIO-MARBLE-2.jpg"
              alt="Indian marble"
              className="slider-img"
            />
            <p className="slider-text">Indian Marble</p>
          </div>
          <div className="slider-card">
            <img
              src="https://www.rkmarble.com/wp-content/uploads/2023/02/210-318X510_FEATURED-IMAGE-Statuario-1.jpg"
              alt="Imported marble"
              className="slider-img"
            />
            <p className="slider-text">Imported Marble</p>
          </div>
          <div className="slider-card">
            <img
              src="https://4.imimg.com/data4/CL/RB/MY-3271629/south-indian-granite.jpg"
              alt="Indian Granite"
              className="slider-img"
            />
            <p className="slider-text">Indian Granite</p>
          </div>
          <div className="slider-card">
            <img
              src="https://5.imimg.com/data5/VI/EB/GI/SELLER-4231523/blue-pearl-granite-slab-500x500.jpg"
              alt="Impoted Granite"
              className="slider-img"
            />
            <p className="slider-text">Imported Granite</p>
          </div>
          <div className="slider-card">
            <img
              src="https://www.rkmarble.com/wp-content/uploads/2023/02/176-690X435_PRODUCT-Pink-Onyx.jpg"
              alt="Onyx"
              className="slider-img"
            />
            <p className="slider-text">Onyx</p>
          </div>
          <div className="slider-card">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2021/4/EN/FF/FY/88604767/imperial-white-granite.jpg"
              alt="Quartz"
              className="slider-img"
            />
            <p className="slider-text">Quartz</p>
          </div>
          <div className="slider-card">
            <img
              src="https://3.imimg.com/data3/GH/EV/MY-11429963/81-500x500.jpg"
              alt="Travertine"
              className="slider-img"
            />
            <p className="slider-text">Travertine</p>
          </div>
          <div className="slider-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSImnQqRz-LW63jasfPBP5P1XgO0RsebleNOg&s"
              alt="Snadstone"
              className="slider-img"
            />
            <p className="slider-text">Sandstone</p>
          </div>
          <div className="slider-card">
            <img
              src="https://www.rkmarble.com/wp-content/uploads/2023/02/210-318X510_FEATURED-IMAGE-Statuario-1.jpg"
              alt="Limestone"
              className="slider-img"
            />
            <p className="slider-text">Limestone</p>
          </div>
        </Slider>
      </div>

      {/* smaller slider */}

      <div className="slider-container-sm">
        <Slider {...settingsSmall}>
          <div className="slider-card">
            <img
              src="https://www.marbleindian.com/wp-content/uploads/2018/09/INDIAN-STATUARIO-MARBLE-2.jpg"
              alt="Indian marble"
              className="slider-img"
            />
            <p className="slider-text">Indian Marble</p>
          </div>
          <div className="slider-card">
            <img
              src="https://www.rkmarble.com/wp-content/uploads/2023/02/210-318X510_FEATURED-IMAGE-Statuario-1.jpg"
              alt="Imported marble"
              className="slider-img"
            />
            <p className="slider-text">Imported Marble</p>
          </div>
          <div className="slider-card">
            <img
              src="https://4.imimg.com/data4/CL/RB/MY-3271629/south-indian-granite.jpg"
              alt="Indian Granite"
              className="slider-img"
            />
            <p className="slider-text">Indian Granite</p>
          </div>
          <div className="slider-card">
            <img
              src="https://5.imimg.com/data5/VI/EB/GI/SELLER-4231523/blue-pearl-granite-slab-500x500.jpg"
              alt="Impoted Granite"
              className="slider-img"
            />
            <p className="slider-text">Imported Granite</p>
          </div>
          <div className="slider-card">
            <img
              src="https://www.rkmarble.com/wp-content/uploads/2023/02/176-690X435_PRODUCT-Pink-Onyx.jpg"
              alt="Onyx"
              className="slider-img"
            />
            <p className="slider-text">Onyx</p>
          </div>
          <div className="slider-card">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2021/4/EN/FF/FY/88604767/imperial-white-granite.jpg"
              alt="Quartz"
              className="slider-img"
            />
            <p className="slider-text">Quartz</p>
          </div>
          <div className="slider-card">
            <img
              src="https://3.imimg.com/data3/GH/EV/MY-11429963/81-500x500.jpg"
              alt="Travertine"
              className="slider-img"
            />
            <p className="slider-text">Travertine</p>
          </div>
          <div className="slider-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSImnQqRz-LW63jasfPBP5P1XgO0RsebleNOg&s"
              alt="Snadstone"
              className="slider-img"
            />
            <p className="slider-text">Sandstone</p>
          </div>
          <div className="slider-card">
            <img
              src="https://www.rkmarble.com/wp-content/uploads/2023/02/210-318X510_FEATURED-IMAGE-Statuario-1.jpg"
              alt="Limestone"
              className="slider-img"
            />
            <p className="slider-text">Limestone</p>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Category;
