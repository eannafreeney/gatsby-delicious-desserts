import React from "react";

const RecipeInstructions = ({ recipe }) => {
  const {
    content: { instructions }
  } = recipe;

  return (
    <article>
      <h4>instructions</h4>
      {instructions.map((item, index) => {
        return (
          <div key={index} className="single-instruction">
            <header>
              <p>step {index + 1}</p>
              <div></div>
            </header>
            <p>{item}</p>
          </div>
        );
      })}
    </article>
  );
};

export default RecipeInstructions;
