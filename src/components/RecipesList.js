import React from "react";

import RecipeCard from "./RecipeCard";

const RecipesList = ({ recipes = [] }) => (
  <div className="recipes-list">
    {recipes.map(recipe => {
      return <RecipeCard recipe={recipe} />;
    })}
  </div>
);

export default RecipesList;
