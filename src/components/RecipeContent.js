import React from "react";

import RecipeIngredients from "./RecipeIngredients";
import RecipeInstructions from "./RecipeInstructions";

const RecipeContent = ({ recipe }) => (
  <section className="recipe-content">
    <RecipeInstructions recipe={recipe} />
    <RecipeIngredients recipe={recipe} />
  </section>
);

export default RecipeContent;
