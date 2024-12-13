import "./index.css";

const Products = () => (
  <div className="products">
    <div className="products-container">
      <div className="products-section">
        <div className="products-left animate-zoom">
          <h5 className="products-title">BEST IN DEMAND</h5>
          <h1 className="products-heading">Best Selling Products</h1>
        </div>
        <button className="products-btn animate-slide-up">
          view more
          <i class="bi bi-arrow-right m-2"></i>
        </button>
      </div>
    </div>
    <hr className="products-line" />
    <div className="product-images-container">
      <div className="product-image-card animate-fade-in">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1QGu279PgX9jF2V8sYdO9cLtXsMBxSIhlg&s"
          alt="Amazon Green Quartzite"
          className="product-img"
        />
        <button className="option-btn">SELECT OPTIONS</button>
        <h1 className="product-name">Amazon Green Quartzite</h1>
        <p className="product-price">$1.00 persq/ft</p>
      </div>
      <div className="product-image-card animate-fade-in">
        <img
          src="https://www.aonemarbles.com/wp-content/uploads/2019/03/Black-Marquina-Marble.jpg"
          alt="Black Marquina"
          className="product-img"
        />
        <button className="option-btn">SELECT OPTIONS</button>
        <h1 className="product-name">Black Marquina</h1>
        <p className="product-price">$1.00 persq/ft</p>
      </div>
      <div className="product-image-card animate-fade-in">
        <img
          src="https://5.imimg.com/data5/TestImages/ZB/ZD/RZ/SELLER-27032784/golden-spider.jpg"
          alt="Golden Spider"
          className="product-img"
        />
        <button className="option-btn">SELECT OPTIONS</button>
        <h1 className="product-name">Golden Spider</h1>
        <p className="product-price">$1.00 persq/ft</p>
      </div>
      <div className="product-image-card animate-fade-in">
        <img
          src="https://mawrbled.com/cdn/shop/files/KuppamGreenGranite.jpg?crop=center&height=1200&v=1700640028&width=1200"
          alt="Kuppam Green Granite"
          className="product-img"
        />
        <button className="option-btn">SELECT OPTIONS</button>
        <h1 className="product-name">Kuppam Green Granite</h1>
        <p className="product-price">$1.00 persq/ft</p>
      </div>
    </div>
  </div>
);

export default Products;
