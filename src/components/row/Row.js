import React from "react";
import "./row.scss";
import Pixel from "../pixel/Pixel";

export default function Row({ width, selectedColor }) {

  let pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} selectedColor={selectedColor} />);
  }

  return <div className="row">{pixels}</div>;
}
