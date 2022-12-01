import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ item }) => {
  return (
    <Link
      className="link"
      to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew && <span>New Collection</span>}
          <img
            className="main-img"
            src={item.img}
            alt="product"
          />
          <img
            className="second-img"
            src={item.img2}
            alt="product"
          />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>{item.oldPrice} $</h3>
          <h3>{item.price} $</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;