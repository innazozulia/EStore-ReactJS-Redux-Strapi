import React from "react";
import {
  BsChevronCompactDown,
  BsSearch,
  BsFillPersonFill,
  BsCart3,
} from "react-icons/bs";
import { MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Navbar.scss";

const Navbar = () => {
  const [openCart, setOpenCart] = React.useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="flag-item">
            <img
              className="flag"
              src="data:image/png;base64,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"
              alt="lang"
            />
            <BsChevronCompactDown />
          </div>
          <div className="currency-item">
            <span>USD</span>
            <BsChevronCompactDown />
          </div>
          <div className="item">
            <Link
              className="link"
              to="products/1">
              Men
            </Link>
          </div>
          <div className="item">
            <Link
              className="link"
              to="products/2">
              Women
            </Link>
          </div>
          <div className="item">
            <Link
              className="link"
              to="products/3">
              Children
            </Link>
          </div>
          <div className="item">
            <Link
              className="link"
              to="products/4">
              Accessories
            </Link>
          </div>
        </div>
        <div className="center">
          <Link
            className="link"
            to="/">
            yourStore.
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link
              className="link"
              to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link
              className="link"
              to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link
              className="link"
              to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link
              className="link"
              to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <BsSearch />
            <BsFillPersonFill />
            <MdOutlineFavorite />
            <div
              className="cart-icon"
              onClick={() => setOpenCart(!openCart)}>
              <BsCart3 />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {openCart && <Cart />}
    </div>
  );
};

export default Navbar;
