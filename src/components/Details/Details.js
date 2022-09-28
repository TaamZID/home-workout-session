import React from "react";
import "./Details.css";

const Details = ({ cart }) => {
//   const { cart } = props.cart;

  let total = 0;
  for (const exercise of cart) {
    total = parseFloat(total + exercise.time);
  }
  return (
    <div className="details">
      <h4>Exercise Details</h4>
      <p>Exercise Time: {total}s</p>
    </div>
  );
};

export default Details;
