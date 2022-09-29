import React, { useEffect, useState } from "react";
import "./Details.css";

const Details = ({ cart }) => {
  const [cnt, setBreak] = useState(0);

  useEffect(() => {
    const localData = localStorage.getItem("time");
    if (localData) {
      setBreak(localData);
    }
    console.log(localData);
  }, [cnt]);

  let total = 0;
  let quantity = 0;
  for (const exercise of cart) {
    quantity = quantity + exercise.quantity;
    total = parseFloat(total + exercise.time * exercise.quantity);
  }

  return (
    <div className="details">
      <div>
        <h2>MD TAMZIDUL ALAM</h2>
        <h3>Add a break</h3>
        <div className="break">
          <button
            onClick={() => {
              localStorage.setItem("time", JSON.stringify(cnt));
              setBreak(10);
            }}
          >
            10s
          </button>
          <button
            onClick={() => {
              localStorage.setItem("time", JSON.stringify(cnt));
              setBreak(20);
            }}
          >
            20s
          </button>
          <button
            onClick={() => {
              localStorage.setItem("time", JSON.stringify(cnt));
              setBreak(30);
            }}
          >
            30s
          </button>
          <button
            onClick={() => {
              localStorage.setItem("time", JSON.stringify(cnt));
              setBreak(40);
            }}
          >
            40s
          </button>
          <button
            onClick={() => {
              localStorage.setItem("time", JSON.stringify(cnt));
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
      <button className="">
        Activity Completed
      </button>
    </div>
  );
};

export default Details;
