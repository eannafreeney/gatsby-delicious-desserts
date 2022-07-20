import React from "react";

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const About = () => (
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
);

export default About;
