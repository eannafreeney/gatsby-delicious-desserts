import React from "react";

import AllRecipes from "../components/AllRecipes";
import Layout from "../components/Layout";
import Page from "../components/Page";
import SEO from "../components/SEO";

const Recipes = () => (
  <Layout>
    <SEO title="Recipes" />
    <Page>
      <AllRecipes />
    </Page>
  </Layout>
);

export default Recipes;
