import React from "react";
import slugify from "slugify";

import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        const { id, title, image, prepTime, cookTime } = recipe;
        const pathToImage = getImage(image);
        const slug = slugify(title, { lower: true });

        return (
          <Link key={id} to={`/${slug}`} className="recipes-list--link">
            <GatsbyImage
              image={pathToImage}
              className="recipes-list--img"
              alt={title}
            />
            <h6 className="recipes-list--title">{title}</h6>
            <p className="recipes-list--text">Prep : {prepTime}</p>
            <p className="recipes-list--text">Cook : {cookTime}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default RecipesList;
