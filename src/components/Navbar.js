import React, { useState } from "react";
import classNames from "classNames";

import Logo from "./Logo";
import NavbarButton from "./NavbarButton";
import Navigation from "./Navigation";

const Navbar = () => {
  const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState(false);
  const linksClasses = classNames("navbar--links", {
    "show-links": isDropDownMenuOpen
  });

  return (
    <nav className="navbar">
      <div className="navbar--center">
        <div className="navbar--header">
          <Logo />
          <NavbarButton
            onClick={() => setIsDropDownMenuOpen(!isDropDownMenuOpen)}
          />
        </div>
        <div className={linksClasses}>
          <Navigation setIsDropDownMenuOpen={setIsDropDownMenuOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
