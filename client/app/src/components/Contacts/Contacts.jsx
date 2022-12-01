import React from "react";
import {
  BsFacebook,
  BsPinterest,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import "./Contacts.scss";

const Contacts = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>
        <div className="email">
          <input
            type="text"
            placeholder="Enter your e-mail..."
          />
          <button>JOIN US</button>
        </div>
        <div className="social">
          <BsFacebook />
          <BsPinterest />
          <BsInstagram />
          <BsTwitter />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
