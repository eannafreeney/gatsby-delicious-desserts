import React from "react";

import { FiAlignJustify } from "react-icons/fi";

const NavbarButton = ({ onClick }) => {
  return (
    <button className="navbar--btn" onClick={onClick}>
      <FiAlignJustify />
    </button>
  );
};

export default NavbarButton;
