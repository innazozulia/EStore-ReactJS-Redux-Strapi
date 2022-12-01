import React from "react";
import Card from "../Card/Card";
import "./List.scss";

const List = () => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1582676680884-bfe848f24776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      img2: "https://images.unsplash.com/photo-1582676756457-a72aca1cff39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80",
      title: "Set",
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
      oldPrice: 23,
      price: 20,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1616150638538-ffb0679a3fc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      img2: "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      isNew: true,
      title: "Set",
      oldPrice: 35,
      price: 14,
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1612636676503-77f496c96ef8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
      img2: "https://images.unsplash.com/photo-1611246539484-1f8e71d19ea5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Set",
      oldPrice: 31,
      price: 16,
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1632477443572-dd0aa40fc27c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
      img2: "https://images.unsplash.com/photo-1610973310510-82f514ea1986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
      title: "Set",
      oldPrice: 38,
      price: 13,
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1521722776011-39ec91e0c14b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
      img2: "https://images.unsplash.com/photo-1616249899793-4b6a9532aa9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
      title: "Set",
      oldPrice: 41,
      price: 20,
    },
  ];
  return (
    <div className="list">
      {data.map((item) => (
        <Card
          item={item}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default List;
