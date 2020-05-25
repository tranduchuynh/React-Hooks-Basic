import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./ColorBox.scss";

ColorBox.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
  const randomIndex = Math.floor(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box-color") || "deeppink";
    console.log(initColor);
    return initColor;
  });

  function handleBoxClick() {
    // get random color -> set color
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem("box-color", newColor);
  }
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    ></div>
  );
}

export default ColorBox;
