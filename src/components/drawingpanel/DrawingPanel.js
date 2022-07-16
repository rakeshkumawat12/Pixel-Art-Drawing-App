import React, { useRef } from "react";
import "./drawingpanel.scss";
import Row from "../row/Row";
import { exportComponentAsPNG } from "react-component-export-image";

export default function DrawingPanel({ width, height, selectedColor }) {

  const panelRef = useRef();

  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} selectedColor={selectedColor} />);
  }

  return (
    <div id="drawingPanel">
      <div id="pixels" ref={panelRef}>
        {rows}
      </div>
      <button onClick={() => exportComponentAsPNG(panelRef)} className="button">
        Export as PNG
      </button>
    </div>
  );
}
