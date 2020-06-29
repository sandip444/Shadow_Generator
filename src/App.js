import React, { useState } from "react";
import "./App.css";
export default function App() {
  const [hori, setHori] = useState(10);
  const [varti, setVarti] = useState(10);
  const [blur, setBlur] = useState(10);
  const [color, setColor] = useState("black");
  const [checkOn, setCheckOn] = useState(false);
  return (
    <div className="App">
      <div className="controls">
        <label>Horizontal Length</label>
        <input
          type="range"
          min="-200"
          max="200"
          value={hori}
          onChange={(e) => setHori(e.target.value)}
        />
        <br />
        <label>Vertical Length</label>
        <input
          type="range"
          min="-200"
          max="200"
          value={varti}
          onChange={(e) => setVarti(e.target.value)}
        />
        <label>Blur</label>
        <input
          type="range"
          min="0"
          max="100"
          value={blur}
          onChange={(e) => setBlur(e.target.value)}
        />
        <br />
        <label>Color</label>&nbsp;
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <br />
        <div className="switch">
          <label>
            Outline
            <input
              type="checkbox"
              checked={checkOn}
              onChange={() => setCheckOn(!checkOn)}
            />
            <span className="lever"></span>
            inset
          </label>
        </div>
      </div>
      <div className="output">
        <div
          className="box"
          style={{
            boxShadow: `${
              checkOn ? "inset" : ""
            } ${hori}px ${varti}px ${blur}px ${color}`,
          }}
        >
          <p>
            box-shodow:{hori}px {varti}px {blur}px {color}
          </p>
        </div>
      </div>
    </div>
  );
}
