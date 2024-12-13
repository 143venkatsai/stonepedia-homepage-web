import React from "react";
import Slider from "react-slick";
import { BsArrowRightCircle } from "react-icons/bs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const settingsSmall = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="blog">
      <div className="blog-container">
        <div className="blog-section">
          <div className="blog-left">
            <h5 className="blog-title">QUALITY YOU CAN TRUST</h5>
            <h1 className="blog-heading">Our Premium Stones</h1>
          </div>
          <button className="blog-btn">
            view more
            <i class="bi bi-arrow-right m-2"></i>
          </button>
        </div>
      </div>
      <hr className="blog-line" />

      {/* Larger divices */}
      <div className="slider-blog-container">
        <Slider {...settings}>
          <div className="slider-blog-card">
            <img
              src="https://anjaneyauniversity.ac.in/blog/wp-content/uploads/2024/09/image-2-1210x700.webp"
              alt="Indian marble"
              className="slider-blog-img"
            />
            <p className="slider-blog-text">OCTOBER 23, 2024 | 0 COMMENTS</p>
            <h6 className="slider-blog-heading">
              The Economic Of Marble: Why It's A Lucrative Material For Builders
            </h6>
            <div className="slider-blog-feature">
              <BsArrowRightCircle className="blog-arrow" />
              <p className="blog-read">READ MORE</p>
            </div>
          </div>
          <div className="slider-blog-card">
            <img
              src="https://i.pinimg.com/736x/9d/1c/7e/9d1c7e26926d325e6a4649e6e0b12863.jpg"
              alt="Imported marble"
              className="slider-blog-img"
            />
            <p className="slider-blog-text">OCTOBER 23, 2024 | 0 COMMENTS</p>
            <h6 className="slider-blog-heading">
              Global Market Capitalization Of The Natural Stone Industry
            </h6>
            <div className="slider-blog-feature">
              <BsArrowRightCircle className="blog-arrow" />
              <p className="blog-read">READ MORE</p>
            </div>
          </div>
          <div className="slider-blog-card">
            <img
              src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/202308/marble-kitchen-design/matt-grey-kitchen-countertop%20.jpg"
              alt="Indian Granite"
              className="slider-blog-img"
            />
            <p className="slider-blog-text">OCTOBER 23, 2024 | 0 COMMENTS</p>
            <h6 className="slider-blog-heading">
              Marble In Modern Kitchen Design: Why It Remains A Timeless
              Favorite
            </h6>
            <div className="slider-blog-feature">
              <BsArrowRightCircle className="blog-arrow" />
              <p className="blog-read">READ MORE</p>
            </div>
          </div>
          <div className="slider-blog-card">
            <img
              src="https://www.haasbuilding.com/wp-content/uploads/2021/09/DSC05715.jpg"
              alt="Impoted Granite"
              className="slider-blog-img"
            />
            <p className="slider-blog-text">OCTOBER 23, 2024 | 0 COMMENTS</p>
            <h6 className="slider-blog-heading">
              The Role Of Marble In Luxury Commercial Spaces
            </h6>
            <div className="slider-blog-feature">
              <BsArrowRightCircle className="blog-arrow" />
              <p className="blog-read">READ MORE</p>
            </div>
          </div>
          <div className="slider-blog-card">
            <img
              src="https://cpimg.tistatic.com/01110960/b/7/Marble-Tiles.jpg"
              alt="Onyx"
              className="slider-blog-img"
            />
            <p className="slider-blog-text">OCTOBER 23, 2024 | 0 COMMENTS</p>
            <h6 className="slider-blog-heading">
              Understanding The Economic Factors That Influence The Cost Of
              Marble
            </h6>
            <div className="slider-blog-feature">
              <BsArrowRightCircle className="blog-arrow" />
              <p className="blog-read">READ MORE</p>
            </div>
          </div>
        </Slider>
      </div>

      {/* Small divices */}

      <div className="slider-blog-container-sm">
        <Slider {...settingsSmall}>
          <div className="slider-blog-card">
            <img
              src="https://anjaneyauniversity.ac.in/blog/wp-content/uploads/2024/09/image-2-1210x700.webp"
              alt="Indian marble"
              className="slider-blog-img"
            />
            <p className="slider-blog-text">OCTOBER 23, 2024 | 0 COMMENTS</p>
            <h6 className="slider-blog-heading">
              The Economic Of Marble: Why It's A Lucrative Material For Builders
            </h6>
            <div className="slider-blog-feature">
              <BsArrowRightCircle className="blog-arrow" />
              <p className="blog-read">READ MORE</p>
            </div>
          </div>
          <div className="slider-blog-card">
            <img
              src="https://i.pinimg.com/736x/9d/1c/7e/9d1c7e26926d325e6a4649e6e0b12863.jpg"
              alt="Imported marble"
              className="slider-blog-img"
            />
            <p className="slider-blog-text">OCTOBER 23, 2024 | 0 COMMENTS</p>
            <h6 className="slider-blog-heading">
              Global Market Capitalization Of The Natural Stone Industry
            </h6>
            <div className="slider-blog-feature">
              <BsArrowRightCircle className="blog-arrow" />
              <p className="blog-read">READ MORE</p>
            </div>
          </div>
          <div className="slider-blog-card">
            <img
              src="https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/202308/marble-kitchen-design/matt-grey-kitchen-countertop%20.jpg"
              alt="Indian Granite"
              className="slider-blog-img"
            />
            <p className="slider-blog-text">OCTOBER 23, 2024 | 0 COMMENTS</p>
            <h6 className="slider-blog-heading">
              Marble In Modern Kitchen Design: Why It Remains A Timeless
              Favorite
            </h6>
            <div className="slider-blog-feature">
              <BsArrowRightCircle className="blog-arrow" />
              <p className="blog-read">READ MORE</p>
            </div>
          </div>
          <div className="slider-blog-card">
            <img
              src="https://www.haasbuilding.com/wp-content/uploads/2021/09/DSC05715.jpg"
              alt="Impoted Granite"
              className="slider-blog-img"
            />
            <p className="slider-blog-text">OCTOBER 23, 2024 | 0 COMMENTS</p>
            <h6 className="slider-blog-heading">
              The Role Of Marble In Luxury Commercial Spaces
            </h6>
            <div className="slider-blog-feature">
              <BsArrowRightCircle className="blog-arrow" />
              <p className="blog-read">READ MORE</p>
            </div>
          </div>
          <div className="slider-blog-card">
            <img
              src="https://cpimg.tistatic.com/01110960/b/7/Marble-Tiles.jpg"
              alt="Onyx"
              className="slider-blog-img"
            />
            <p className="slider-blog-text">OCTOBER 23, 2024 | 0 COMMENTS</p>
            <h6 className="slider-blog-heading">
              Understanding The Economic Factors That Influence The Cost Of
              Marble
            </h6>
            <div className="slider-blog-feature">
              <BsArrowRightCircle className="blog-arrow" />
              <p className="blog-read">READ MORE</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default Blog;
