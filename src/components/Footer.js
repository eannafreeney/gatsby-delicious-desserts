import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer--text">
        &copy;
        {new Date().getFullYear()}{" "}
        <span className="footer--title">Delicious Desserts</span>. Built with{" "}
        <a className="footer--link" href="https://www.gatsbyjs.com/">
          Gatsby
        </a>
      </p>
    </footer>
  );
};

export default Footer;
