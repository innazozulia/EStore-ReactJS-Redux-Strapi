import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ item }) => {
  console.log(process.env.REACT_APP_UPLOAD_URL);
  return (
    <Link
      className="link"
      to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Collection</span>}
          <img
            className="main-img"
            src={
              "http://localhost:1337" +
              item.attributes?.img?.data?.attributes?.url
            }
            alt="product"
          />
          <img
            className="second-img"
            src={
              "http://localhost:1337" +
              item.attributes?.img2?.data?.attributes?.url
            }
            alt="product"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>{item?.attributes.oldPrice || item?.attributes.price + 20} $</h3>
          <h3>{item?.attributes.price} $</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
