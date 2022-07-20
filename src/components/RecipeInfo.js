import React from "react";

import RecipeIcons from "./RecipeIcons";
import RecipeTags from "./RecipeTags";

const RecipeInfo = ({ recipe }) => {
  const {
    title,
    description,
    content: { tags }
  } = recipe;

  return (
    <article className="recipe-info">
      <h2>{title}</h2>
      <p>{description}</p>
      <RecipeIcons recipe={recipe} />
      <RecipeTags tags={tags} />
    </article>
  );
};
export default RecipeInfo;
