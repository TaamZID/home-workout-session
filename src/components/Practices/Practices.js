import React, { useEffect, useState } from "react";
import Exercises from "../Exercises/Exercises";
import Details from "../Details/Details";
import "./Practices.css";
import { addToDb, getStoredCart } from "../../utilities/fakedb";

const Practices = () => {
  const [exercises, setExercises] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("workouts.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedExercise = [];
    for (const id in storedCart) {
      const addedExercise = exercises.find((exercise) => exercise.id === id);
      if (addedExercise) {
        const quantity = storedCart[id];
        addedExercise.quantity = quantity;
        savedExercise.push(addedExercise);
      }
    }
    setCart(savedExercise);
  }, [exercises]);

  const handleAddToDetails = (exercise) => {
    console.log(exercise);
    let newCart = [];
    const exists = cart.find(exer => exer.id === exercise.id)
    if(!exists){
      exercise.quantity = 1;
      newCart = [...cart, exercise];
    }
    else{
      const rest = cart.filter(exer => exer.id !== exercise.id)
      exists.quantity = exists.quantity+1;
      newCart = [...rest, exists];
    }
    
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
