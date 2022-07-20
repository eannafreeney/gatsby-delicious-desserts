import React from "react";

import AboutComp from "../components/About";
import Layout from "../components/Layout";
import Page from "../components/Page";
import FeaturedRecipes from "../components/FeaturedRecipes";
import SEO from "../components/SEO";

const About = () => (
  <Layout>
    <SEO title="About" />
    <Page>
      <AboutComp />
      <FeaturedRecipes />
    </Page>
  </Layout>
);

export default About;
