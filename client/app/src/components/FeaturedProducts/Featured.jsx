import React from "react";
import Card from "../Card/Card";
import "./Featured.scss";

const Featured = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80",
      img2: "https://images.unsplash.com/photo-1520591799316-6b30425429aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Set",
      isNew: true,
      oldPrice: 27,
      price: 20,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      img2: "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      isNew: true,
      title: "Set",
      oldPrice: 23,
      price: 20,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      img2: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      isNew: true,
      title: "Set",
      oldPrice: 35,
      price: 14,
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      img2: "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      title: "Set",
      oldPrice: 31,
      price: 16,
    },
  ];
  return (
    <div className="featured">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At expedita
          nemo obcaecati asperiores maxime quaerat nobis labore voluptatem sunt?
          Nihil optio accusantium commodi sapiente aperiam tenetur ullam
          dignissimos necessitatibus corporis!
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card
            item={item}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
