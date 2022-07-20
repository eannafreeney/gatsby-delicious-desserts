import React from "react";
import { Link } from "gatsby";

import logo from "../assets/images/logo.png";

const Logo = () => (
  <Link to="/">
    <img src={logo} alt="simply recipes" />
  </Link>
);

export default Logo;
