import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div className="question-container">
      <div className="answer">
        <h3>
          Q1. How does react work? <br></br>
          <p>
            Ans. React uses a declarative paradigm that makes it easier to
            reason about your application and aims to be both efficient and
            flexible. It designs simple views for each state in your
            application, and React will efficiently update and render just the
            right component when your data changes
          </p>
        </h3>
        <br />
        <h3>
          Q2. Differences between props and state? <br></br>
          <p>
            Ans. The main difference between Props are used to pass data from
            one component to another. The state is a local data storage that is
            local to the component only and cannot be passed to other
            components.
          </p>
        </h3>
        <br />
        <h3>
          Q3. What is useEffect work except data load? <br></br>
          <p>
            Ans. useEffect is the solution to many problems: how to fetch data
            when a component mounts, how to run code when state changes or when
            a prop changes, how to set up timers or intervals, you name it.
            Pretty much anything you want to “do” in a React component other
            than return JSX (any sort of side effect), will go into a useEffect.
          </p>
        </h3>
        <br />
      </div>
    </div>
  );
};

export default Question;
