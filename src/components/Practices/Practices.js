import React, { useEffect, useState } from "react";
import Exercises from "../Exercises/Exercises";
import Details from "../Details/Details";
import "./Practices.css";
import { addToDb } from "../../utilities/fakedb";

const Practices = () => {
  const [exercises, setExercises] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("workouts.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  const handleAddToDetails = (exercise) => {
    console.log(exercise);
    const newCart = [...cart, exercise];
    setCart(newCart);
    addToDb(exercise.id);
  };
  return (
    <div className="practice-container">
      <div className="exercises-container">
        {exercises.map((exercise) => (
          <Exercises
            key={exercise.id}
            exercise={exercise}
            handleAddToDetails={handleAddToDetails}
          ></Exercises>
        ))}
      </div>
      <div className="cart-container">
        <Details cart={cart}></Details>
      </div>
    </div>
  );
};

export default Practices;
