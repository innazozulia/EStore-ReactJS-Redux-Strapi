import React from "react";
import Card from "../Card/Card";
import axios from "axios";
import "./Featured.scss";

const Featured = ({ type }) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:1337/api/products?populate=*&[filters][type][[$eq]=${type}`,
          {
            headers: {
              Authorization: "Bearer" + process.env.REACT_APP_API_TOKEN,
            },
          },
        );
        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
