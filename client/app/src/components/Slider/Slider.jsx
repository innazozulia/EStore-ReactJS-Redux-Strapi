import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./Slider.scss";

const Slider = () => {
  const [currentSlider, setCurrentSlider] = React.useState(0);

  const data = [
    "https://images.unsplash.com/photo-1526887520775-4b14b8aed897?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc2hpb24lMjBtZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  ];

  const prevSlide = () => {
    setCurrentSlider(currentSlider === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlider = () => {
    setCurrentSlider(currentSlider === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}>
        <img
          src={data[0]}
          alt="slider"
        />
        <img
          src={data[1]}
          alt="slider"
        />
        <img
          src={data[2]}
          alt="slider"
        />
      </div>
      <div className="arrows">
        <div
          className="icon"
          onClick={prevSlide}>
          <BsChevronLeft />
        </div>
        <div
          className="icon"
          onClick={nextSlider}>
          <BsChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Slider;
