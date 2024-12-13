import React from "react";

import "./index.css";

const ClientImages = [
  {
    id: 1,
    image:
      "https://logowik.com/content/uploads/images/godrej1143.logowik.com.webp",
  },
  {
    id: 2,
    image:
      "https://pbs.twimg.com/profile_images/1354758101296058372/k_-U6uYs_400x400.jpg",
  },
  {
    id: 3,
    image:
      "https://images.jdmagicbox.com/v2/hyderabad/f8/040p1220869640v3w8f8/catalogue/tata-projects-ltd-police-lines-begumpet-hyderabad-construction-companies-lyri9.jpg",
  },
  {
    id: 4,
    image: "https://www.rof.co.in/images/mainlogo.png",
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScC2XqBc8do8uDaV8IMZyyP7lNqZAU4kdRcw&s",
  },
  {
    id: 6,
    image:
      "https://www.suncityprojects.com/images/logo-suncity-township-jaipur.png",
  },
  {
    id: 7,
    image:
      "https://www.axiomlandbase.in/wp-content/uploads/2019/06/m3m-logo.png",
  },
  {
    id: 8,
    image:
      "https://assets.isu.pub/document-structure/230624114335-a3ed315b952515423fb7bb106538df58/v1/1897cdc0c2044f18fc48821c86014a09.jpeg?width=720&quality=85%2C50",
  },
  {
    id: 9,
    image:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2024-04/05/full/20240405125256.jpg",
  },
  {
    id: 10,
    image:
      "https://www.axiomlandbase.in/wp-content/uploads/2019/12/Elan-logo.png",
  },
];

const Clients = () => (
  <div className="clients-container">
    <h5 className="clients-title">OUR CLINETS</h5>
    <h1 className="clients-heading">Our Valuable Clients</h1>
    <div className="client-images-container">
      {ClientImages.map((item) => (
        <img src={item.image} alt="client" className="client-img" />
      ))}
    </div>
  </div>
);

export default Clients;
