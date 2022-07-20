import React from "react";
import { graphql } from "gatsby";

import Page from "../components/Page";
import RecipesList from "../components/RecipesList";
import Layout from "../components/Layout";

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipes.nodes;
  const currentTag = pageContext.tag;

  return (
    <Layout>
      <Page>
        <h2>All {currentTag} Recipes</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipes(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default TagTemplate;
