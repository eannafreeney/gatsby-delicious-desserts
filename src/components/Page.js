import React from "react";
import classNames from "classnames";

const Page = ({ customClass, children }) => {
  const classes = classNames("page", {
    [customClass]: Boolean(customClass)
  });

  return <section className={classes}>{children}</section>;
};

export default Page;
