import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import RecipeInfo from "../components/RecipeInfo";

const RecipeHero = ({ recipe }) => {
  const pathToImage = getImage(recipe.image);

  return (
    <section className="recipe-hero">
      <GatsbyImage
        image={pathToImage}
        alt={recipe.title}
        className="about-img"
      />
      <RecipeInfo recipe={recipe} />
    </section>
  );
};

export default RecipeHero;
