import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => (
  <section className="hero">
    <StaticImage
      src="../assets/images/main3.jpeg"
      alt="eggs"
      className="hero--img"
      placeholder="tracedSVG"
      layout="fullWidth"
    />
    <div className="hero--container">
      <div className="hero--text">
        <h1 className="hero--title">delicious desserts</h1>
        <h4 className="hero--subtitle">no fluff, just recipes</h4>
      </div>
    </div>
  </section>
);

export default Hero;
