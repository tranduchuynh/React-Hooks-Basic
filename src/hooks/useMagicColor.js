import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function randomColor(currentColor) {
  const COLOR_LIST = ["red", "green", "blue"];
  // find index current color in list colors
  const colorIndex = COLOR_LIST.indexOf(currentColor);
  // assign color index = new color index
  let newColorIndex = colorIndex;

  // use while and compare
  // if color index === new color index
  while (colorIndex === newColorIndex) {
    // 0 --> 2
    newColorIndex = Math.floor(Math.random() * 3);
  }

  return COLOR_LIST[newColorIndex];
}

function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent");
  useEffect(() => {
    const colorInterval = setInterval(() => {
      // console.log("first color: ", color);
      // console.log("change color: ", colorRef.current);

      const newColor = randomColor(colorRef.current);
      setColor(newColor);

      colorRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);
  return color;
}

export default useMagicColor;
