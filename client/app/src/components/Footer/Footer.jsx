import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Children</span>
          <span>Accessories</span>
          <span>All Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            qui corrupti error perspiciatis cupiditate ipsum in eaque tempore
            excepturi illum. Temporibus eum consequatur ducimus eligendi aliquid
            sint beatae saepe asperiores.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            eum quibusdam atque vel inventore, placeat, numquam cumque
            distinctio mollitia suscipit quas asperiores ipsum et blanditiis ab
            eveniet necessitatibus, impedit voluptatum.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">yourStore.</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved.
          </span>
        </div>
        <div className="right">
          <div className="container">
            <img
              className="card"
              src="https://store-cdn.arduino.cc/uni/wysiwyg/Payment_Options.jpg"
              alt="payment"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
