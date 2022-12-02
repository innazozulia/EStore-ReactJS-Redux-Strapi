import React from "react";
import { GrCart } from "react-icons/gr";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";
import "./Product.scss";

const Product = () => {
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);
  const images = [
    "https://images.unsplash.com/photo-1616348490852-d80c545b4f79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8R3Jaemwyb0JmdGd8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1621939745912-aad97fd3a34d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxHclp6bDJvQmZ0Z3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1626386699888-b8865823b279?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxHclp6bDJvQmZ0Z3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1605389170783-bcb01d8a57dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8R3Jaemwyb0JmdGd8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={images[0]}
            alt=""
            onClick={(e) => setSelectedImage(0)}
          />
          <img
            src={images[1]}
            alt=""
            onClick={(e) => setSelectedImage(1)}
          />
          <img
            src={images[2]}
            alt=""
            onClick={(e) => setSelectedImage(2)}
          />
          <img
            src={images[3]}
            alt=""
            onClick={(e) => setSelectedImage(3)}
          />
        </div>
        <div className="main-img">
          <img
            src={images[selectedImage]}
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span>200$</span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
          doloribus animi vel magni, totam aspernatur eius temporibus nam minima
          consectetur consequuntur odio quidem, ut voluptatem iusto beatae
          dolores eveniet necessitatibus.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <button className="add-btn">
          Add to Cart <GrCart className="add-icon" />
        </button>
        <div className="links">
          <div className="item">
            <MdOutlineFavoriteBorder /> ADD TO WISH LIST
          </div>
          <div className="item">
            <FaBalanceScale /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: La Kress</span>
          <span>Product Type: Dress</span>
          <span>Tag: Dress, Women, Top, Accessories</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <span>ADDITIONAL INFORMATION</span>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
