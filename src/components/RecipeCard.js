import React from "react";
import slugify from "slugify";

import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const RecipeCard = ({ recipe }) => {
  const { id, title, image, prepTime, cookTime } = recipe;
  const slug = slugify(title, { lower: true });

  return (
    <Link key={id} to={`/${slug}`} className="recipe-card">
      <GatsbyImage
        image={getImage(image)}
        className="recipe-card--img"
        alt={title}
      />
      <h6 className="recipe-card--title">{title}</h6>
      <p className="recipe-card--text">Prep : {prepTime}</p>
      <p className="recipe-card--text">Cook : {cookTime}</p>
    </Link>
  );
};

export default RecipeCard;
