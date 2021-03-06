import React from "react";
import slugify from "slugify";

import sortTagsbyQuantity from "../utils/sortTagsbyQuantity";

import { Link } from "gatsby";

const TagsList = ({ tags }) => {
  const newTags = sortTagsbyQuantity(tags);

  return (
    <div className="tags-list">
      <h4 className="tags-list--title">recipes</h4>
      <div className="tags-list--items">
        {newTags.map((tag, index) => {
          const [text, value] = tag;
          const slug = slugify(text, { lower: true });

          return (
            <Link to={`/tags/${slug}`} key={index}>
              {text} – <span className="tags-list--value">{value}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagsList;
