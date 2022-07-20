import React from "react";

const RecipeIngredients = ({ recipe }) => {
  const {
    content: { ingredients }
  } = recipe;

  return (
    <article className="second-column">
      <div>
        <h4>ingredients</h4>
        {ingredients.map((item, index) => {
          return (
            <p key={index} className="single-ingredient">
              {item}
            </p>
          );
        })}
      </div>
    </article>
  );
};

export default RecipeIngredients;
