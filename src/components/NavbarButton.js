import React from "react";

import { FiAlignJustify } from "react-icons/fi";

const NavbarButton = ({ show, setShow }) => {
  return (
    <button className="navbar--btn" onClick={() => setShow(!show)}>
      <FiAlignJustify />
    </button>
  );
};

export default NavbarButton;
