import "./index.css";

const ExclusiveProducts = () => (
  <div className="exclusive">
    <div className="exclusive-container">
      <div className="exclusive-section">
        <div className="exclusive-left">
          <h5 className="exclusive-title">DISCOVER YOUR IDEAL STONE</h5>
          <h1 className="exclusive-heading">StonePedia Exclusive</h1>
        </div>
        <button className="exclusive-btn">
          view more
          <i class="bi bi-arrow-right m-2"></i>
        </button>
      </div>
    </div>
    <hr className="exclusive-line" />
    <div className="exclusive-images-container">
      <div className="exclusive-image-card">
        <img
          src="https://img.freepik.com/free-photo/close-up-black-marble-textured-background_53876-148094.jpg"
          alt="Marble"
          className="exclusive-img"
        />
        <h1 className="exclusive-name">Marble</h1>
      </div>
      <div className="exclusive-image-card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ocJnYyP7sguZYiMe1v-1nPL5IrmJuVGARQ&s"
          alt="Granite"
          className="exclusive-img"
        />
        <h1 className="exclusive-name">Granite</h1>
      </div>
      <div className="exclusive-image-card">
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2022/7/IJ/KO/UP/3523048/img-1785-500x500.jpg"
          alt="Quartzite"
          className="exclusive-img"
        />
        <h1 className="exclusive-name">Quartzite</h1>
      </div>
      <div className="exclusive-image-card">
        <img
          src="https://stonegroup.gr/wp-content/uploads/2023/02/Advantages-of-limestone-natural-stone.jpg"
          alt="Limestone"
          className="exclusive-img"
        />
        <h1 className="exclusive-name">Limestone</h1>
      </div>
      <div className="exclusive-image-card">
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2023/9/348905727/QA/JF/OW/8305510/beige-travertine-marble.jpg"
          alt="Travertine"
          className="exclusive-img"
        />
        <h1 className="exclusive-name">Travertine</h1>
      </div>
      <div className="exclusive-image-card">
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2023/3/292431144/VK/NF/LG/1913467/honey-onyx-marble.jpg"
          alt="Onyx"
          className="exclusive-img"
        />
        <h1 className="exclusive-name">Onyx</h1>
      </div>
    </div>
  </div>
);

export default ExclusiveProducts;
