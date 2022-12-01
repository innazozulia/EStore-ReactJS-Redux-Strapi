import React from "react";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import "./Products.scss";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = React.useState(10000);
  const [sort, setSort] = React.useState(null);

  return (
    <div className="products">
      <div className="left">
        <div className="filter-item">
          <h2>Product Categories</h2>
          <div className="input-item">
            <input
              type="checkbox"
              id="1"
              value={1}
            />
            <label htmlFor="1">Dresses</label>
          </div>
          <div className="input-item">
            <input
              type="checkbox"
              id="2"
              value={2}
            />
            <label htmlFor="2">Accessories</label>
          </div>
          <div className="input-item">
            <input
              type="checkbox"
              id="3"
              value={3}
            />
            <label htmlFor="3">Coat</label>
          </div>
          <div className="input-item">
            <input
              type="checkbox"
              id="4"
              value={4}
            />
            <label htmlFor="4">Skirts</label>
          </div>
        </div>
        <div className="filter-item">
          <h2>Filter by price</h2>
          <div className="input-item">
            <span>100</span>
            <input
              type="range"
              min="100"
              max="10000"
              step={100}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice} </span>
          </div>
        </div>
        <div className="filter-item">
          <h2>Sort by</h2>
          <div className="input-item">
            <input
              type="radio"
              id="asd"
              name="price"
              onChange={(e) => setSort("asd")}
            />
            <label htmlFor="asd">Price (Lowest fist)</label>
          </div>
          <div className="input-item">
            <input
              type="radio"
              id="des"
              name="price"
              onChange={(e) => setSort("des")}
            />
            <label htmlFor="des">Price (Highest fist)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="cat-img"
          src="https://images.unsplash.com/photo-1582676698140-2fcf355933d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="coat"
        />
        <List
          catId={catId}
          sort={sort}
          maxPrice={maxPrice}
        />
      </div>
    </div>
  );
};

export default Products;
