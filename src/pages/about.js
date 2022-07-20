import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Page from "../components/Page";
import FeaturedRecipes from "../components/FeaturedRecipes";
import SEO from "../components/SEO";

const About = () => (
  <Layout>
    <SEO title="About" />
    <Page>
      <section className="about">
        <article className="about--article">
          <h2 className="about--title">Wonderful Desserts, Easily Made</h2>
          <p className="about--text">
            We specialise in amazing desserts that are easy to make. Please look
            around our site for a recipe that you want to make.
          </p>
          <Link to="/contact" className="btn">
            contact
          </Link>
        </article>
        <StaticImage
          src="../assets/images/about.jpeg"
          alt="Person Pouring Salt in Bowl"
          className="about--img"
          placeholder="blurred"
        />
      </section>
      <FeaturedRecipes />
    </Page>
  </Layout>
);

export default About;
