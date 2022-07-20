import React from "react";

import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs";

const RecipeIcons = ({ recipe }) => {
  const { prepTime, cookTime, servings } = recipe;
  return (
    <div className="recipe-icons">
      <article>
        <BsClock />
        <h5>prep time</h5>
        <p>{prepTime} min.</p>
      </article>
      <article>
        <BsClockHistory />
        <h5>cook time</h5>
        <p>{cookTime} min.</p>
      </article>
      <article>
        <BsPeople />
        <h5>serving</h5>
        <p>{servings} </p>
      </article>
    </div>
  );
};

export default RecipeIcons;
