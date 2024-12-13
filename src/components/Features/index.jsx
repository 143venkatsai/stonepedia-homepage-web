import "./index.css";

const featuresData = [
  {
    id: "1",
    title: "Rigorous Quality Control",
    description:
      "Multi-level inspections ensure every stone meets the highest durability and aesthetic standards.",
    imageUrl: "bi bi-check2-all",
  },
  {
    id: "2",
    title: "Certified Suppliers & Compliance",
    description:
      "Sourced from certified suppliers, every stone complies with global and local regulations.",
    imageUrl: "bi bi-person-check-fill",
  },
  {
    id: "3",
    title: "Expert Guidance and Support",
    description:
      "StonePedia’s specialists provide expert advice on material selection, application, and maintenance.",
    imageUrl: "bi bi-person",
  },
  {
    id: "4",
    title: "Comprehensive High-Quality Stones",
    description:
      "Reliable, on-time delivery of stones directly to your project site, ensuring seamless logistics.",
    imageUrl: "bi bi-boxes",
  },
  {
    id: "5",
    title: "Doorstep Delivery",
    description:
      "Reliable, on-time delivery of stones directly to your project site, ensuring seamless logistics.",
    imageUrl: "bi bi-house-door-fill",
  },
  {
    id: "6",
    title: "Guaranteed Order Fulfillment",
    description:
      "Accurate and timely order processing to meet all project timelines without delays.",
    imageUrl: "bi bi-journal-text",
  },
];

const Features = () => (
  <div className="features-container">
    <div>
      <h5 className="feature-title">REDEFINING STONE SOURCING</h5>
      <h1 className="feature-heading">Why StonePedia?</h1>
    </div>
    <hr className="feature-line" />
    <div className="card-container">
      {featuresData.map((item) => {
        return (
          <div key={item.id} className="feature-card">
            <i
              class={item.imageUrl}
              style={{ fontSize: "2.5rem", color: "#EC1A5C" }}
            ></i>
            <h2 className="card-title">{item.title}</h2>
            <p className="card-description">{item.description}</p>
          </div>
        );
      })}
    </div>
  </div>
);

export default Features;
