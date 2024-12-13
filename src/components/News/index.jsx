import { BsArrowRightCircle } from "react-icons/bs";

import "./index.css";

const News = () => (
  <div className="news-container">
    <div className="news-section">
      <div className="news-left">
        <h5 className="news-title">FEATURED BY</h5>
        <h1 className="news-main-heading">In The News</h1>
        <div>
          <button className="news-btn">
            view more
            <i class="bi bi-arrow-right m-2"></i>
          </button>
        </div>
      </div>
      <div className="news-right">
        <div className="news-card">
          <h4 className="news-heading">
            <span className="news-number">01 </span>Bharat Business Award 2023
          </h4>
          <hr className="news-line" />
          <p className="news-description">
            This award recognizes an employee who has come up with a new idea or
            process that has positively impacted the company
          </p>
          <BsArrowRightCircle className="news-arrow" />
        </div>
        <div className="news-card">
          <h4 className="news-heading">
            <span className="news-number">02 </span>The Print
          </h4>
          <hr className="news-line" />
          <p className="news-description">
            This award recognizes an employee who has shown exceptional
            leadership skills and has inspired and motivated others.
          </p>
          <BsArrowRightCircle className="news-arrow" />
        </div>
        <div className="news-card">
          <h4 className="news-heading">
            <span className="news-number">03 </span>Times Of India
          </h4>
          <hr className="news-line" />
          <p className="news-description">
            These are often awarded to businesses or individuals who have
            achieved success or made significant contributions in their industry
          </p>
          <BsArrowRightCircle className="news-arrow" />
        </div>
        <div className="news-card">
          <h4 className="news-heading">
            <span className="news-number">04 </span>Hindustan Times
          </h4>
          <hr className="news-line" />
          <p className="news-description">
            Design well Acetech showcases the latest trends, products, and
            technologies in the industry and provides a platform
          </p>
          <BsArrowRightCircle className="news-arrow" />
        </div>
      </div>
    </div>
  </div>
);

export default News;
