import React from "react";

const RecipeIngredients = ({ recipe }) => {
  const {
    content: { ingredients }
  } = recipe;

  return (
    <article className="recipe-ingredients">
      <div>
        <h4>ingredients</h4>
        {ingredients.map((item, index) => {
          return (
            <p key={index} className="recipe-ingredients--single">
              {item}
            </p>
          );
        })}
      </div>
    </article>
  );
};

export default RecipeIngredients;
