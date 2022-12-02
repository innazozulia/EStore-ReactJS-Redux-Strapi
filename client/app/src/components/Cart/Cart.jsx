import React from "react";
import { MdDeleteForever } from "react-icons/md";
import "./Cart.scss";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1582676680884-bfe848f24776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      img2: "https://images.unsplash.com/photo-1582676756457-a72aca1cff39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
      title: "Set",
      desc: "Lorem ipsum sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isNew: true,
      oldPrice: 27,
      price: 20,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1616150840617-a0124ea42a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      img2: "https://images.unsplash.com/photo-1616150326910-6fdb1e30adb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      isNew: true,
      title: "Set",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elitt dolore magna aliqua.",
      oldPrice: 23,
      price: 20,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data.map((item) => (
        <div
          className="item"
          key={item.id}>
          <img
            src={item.img}
            alt=""
          />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <MdDeleteForever className="delete-btn" />
        </div>
      ))}
      <div className="total">
        <span>TOTAL:</span>
        {/* <span>${totalPrice()}</span> */}
        <span>$ 125</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
