import React, { useState } from "react";

import Logo from "./Logo";
import NavbarButton from "./NavbarButton";
import Navigation from "./Navigation";

const Navbar = () => {
  const [show, setShow] = useState(false);
  // todo use classNames
  const linksClasses = show ? "navbar--links show-links" : "navbar--links";

  return (
    <nav className="navbar">
      <div className="navbar--center">
        <div className="navbar--header">
          <Logo />
          <NavbarButton show={show} setShow={setShow} />
        </div>
        <div className={linksClasses}>
          <Navigation setShow={setShow} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
