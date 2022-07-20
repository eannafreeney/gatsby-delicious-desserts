import React from "react";
import slugify from "slugify";
import { Link } from "gatsby";

const RecipeTags = ({ tags }) => (
  <p className="recipe-tags">
    Tags :
    {tags.map((tag, index) => {
      const slug = slugify(tag, { lower: true });

      return (
        <Link to={`/tags/${slug}`} key={index}>
          {tag}
        </Link>
      );
    })}
  </p>
);

export default RecipeTags;
