import React from "react";

import { Link } from "gatsby";

const links = [
  { url: "/", title: "home" },
  { url: "/recipes", title: "recipes" },
  { url: "/tags", title: "tags" },
  { url: "/about", title: "about" }
];

const Navigation = ({ setIsDropDownMenuOpen }) => {
  return (
    <>
      {links.map(link => {
        return (
          <Link
            key={link.title}
            to={link.url}
            className="navbar--link"
            activeClassName="active-link"
            onClick={() => setIsDropDownMenuOpen(false)}
          >
            {link.title}
          </Link>
        );
      })}
      <div className="navbar--link contact-link">
        <Link to="/contact" className="btn">
          contact
        </Link>
      </div>
    </>
  );
};

export default Navigation;
