import React from "react";

import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Page from "../components/Page";
import RecipeContent from "../components/RecipeContent";
import SEO from "../components/SEO";
import RecipeHero from "../components/REcipeHero";

const RecipeTemplate = ({ data }) => {
  const recipe = data.recipe;
  const { title, description } = recipe;

  return (
    <Layout>
      <SEO title={title} description={description} />
      <Page customClass="recipe-page">
        <RecipeHero recipe={recipe} />
        <RecipeContent recipe={recipe} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query getSingleRecipe($title: String) {
    recipe: contentfulRecipes(title: { eq: $title }) {
      title
      cookTime
      servings
      content {
        ingredients
        instructions
        tags
      }
      description
      prepTime
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`;

export default RecipeTemplate;
