import React from "react";
import { Link } from "gatsby-plugin-intl";

const Button = ({ to, children, title, icon }) => {
  return (
    <Link to={to} title={title} rel={"noopener"}>
      {icon ? <span className={`fa fa-${icon}`}></span> : ""}
      {children}
    </Link>
  );
};

export default Button;
