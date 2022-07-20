import React from "react";

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Logo = () => (
  <Link to="/">
    <StaticImage
      src="../assets/images/logo.png"
      alt="delicious desserts"
      placeholder="tracedSVG"
      // layout="fullWidth"
    />
  </Link>
);

export default Logo;
