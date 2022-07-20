import React from "react";

const RecipeInstructions = ({ recipe }) => {
  const {
    content: { instructions }
  } = recipe;

  return (
    <article className="recipe-instructions">
      <h4 className="recipe-instructions--title">instructions</h4>
      {instructions.map((item, index) => {
        return (
          <div key={index} className="recipe-instructions--single">
            <header className="recipe-instructions--header">
              <p className="recipe-instructions--text">step {index + 1}</p>
              <div className="recipe-instructions--divider"></div>
            </header>
            <p className="recipe-instructions--item">{item}</p>
          </div>
        );
      })}
    </article>
  );
};

export default RecipeInstructions;
