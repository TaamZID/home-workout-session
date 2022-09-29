import React, { useState } from "react";
import "./Details.css";

const Details = ({ cart }) => {
  const [cnt, setBreak] = useState(0);

  let total = 0;
  for (const exercise of cart) {
    total = parseFloat(total + exercise.time);
  }

  return (
    <div className="details">
      <div>
        <h3>Add a break</h3>
        <div className="break">
          <button
            onClick={() => {
              setBreak(10);
            }}
          >
            10s
          </button>
          <button
            onClick={() => {
              setBreak(20);
            }}
          >
            20s
          </button>
          <button
            onClick={() => {
              setBreak(30);
            }}
          >
            30s
          </button>
          <button
            onClick={() => {
              setBreak(40);
            }}
          >
            40s
          </button>
          <button
            onClick={() => {
              setBreak(50);
            }}
          >
            50s
          </button>
        </div>
      </div>
      <h2>Exercise Details</h2>
      <h4>Exercise Time: {total}s</h4>
      <h4>Break Time: {cnt}s</h4>
    </div>
  );
};

export default Details;
