import React from "react";
import "./MagicColor.scss";
import useMagicColor from "../../hooks/useMagicColor";

function MagicColor() {
  const color = useMagicColor();

  return <div className="box" style={{ backgroundColor: color }}></div>;
}

export default MagicColor;
