import React from "react";
import { Link } from "gatsby-plugin-intl";

// import buttonStyles from "./button.module.scss";

const Button = props => {
  const { to, children, title, icon } = props;
  return (
    <Link to={to} title={title}>
      {icon ? <span className={`fa fa-${icon}`}></span> : ""}
      {children}
    </Link>
  );
};

export default Button;
