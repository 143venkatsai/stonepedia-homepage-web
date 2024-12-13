import "./index.css";

const Premiumpremiums = () => (
  <div className="premium">
    <div className="premium-container">
      <div className="premium-section">
        <div className="premium-left animate-zoom">
          <h5 className="premium-title">QUALITY YOU CAN TRUST</h5>
          <h1 className="premium-heading">Our Premium Stones</h1>
        </div>
        <button className="premium-btn animate-slide-up">
          view more
          <i class="bi bi-arrow-right m-2"></i>
        </button>
      </div>
    </div>
    <hr className="premium-line" />
    <div className="premium-images-container">
      <div className="premium-image-card animate-fade-in">
        <img
          src="https://5.imimg.com/data5/IF/DU/JE/SELLER-95291092/agra-red-sandstone.jpg"
          alt="Dholpur Red"
          className="premium-img"
        />
        <button className="option-btn">SELECT OPTIONS</button>
        <h1 className="premium-name">Dholpur Red</h1>
        <p className="premium-price">$1.00 persq/ft</p>
      </div>
      <div className="premium-image-card animate-fade-in">
        <img
          src="https://apkainterior.gumlet.io/32752/61ea4d851e7ae_BLACK-GRANITE-WITH-BLUE-DOTS.jpg?w=360&dpr=2.6"
          alt="Black Galaxy Granite"
          className="premium-img"
        />
        <button className="option-btn ">SELECT OPTIONS</button>
        <h1 className="premium-name">Black Galaxy Granite</h1>
        <p className="premium-price">$1.00 persq/ft</p>
      </div>
      <div className="premium-image-card animate-fade-in">
        <img
          src="https://5.imimg.com/data5/GD/PJ/AU/SELLER-31267284/blue-pearl-granite.jpg"
          alt="Blue Pearl"
          className="premium-img"
        />
        <button className="option-btn">SELECT OPTIONS</button>
        <h1 className="premium-name">Blue Pearl</h1>
        <p className="premium-price">$1.00 persq/ft</p>
      </div>
      <div className="premium-image-card animate-fade-in">
        <img
          src="https://tiimg.tistatic.com/fp/1/006/583/rajasthan-black-granite-stone-688.jpg"
          alt="Rajasthan Black"
          className="premium-img"
        />
        <button className="option-btn ">SELECT OPTIONS</button>
        <h1 className="premium-name">Rajasthan Black</h1>
        <p className="premium-price">$1.00 persq/ft</p>
      </div>
    </div>
  </div>
);

export default Premiumpremiums;
