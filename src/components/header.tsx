import React from "react";
import Menu from "./menu";
import { injectIntl, Link } from "gatsby-plugin-intl";

const Header = ({ intl }) => (
  <header>
    <Link to="/">{intl.formatMessage({ id: "site.name" })}</Link>
    <Menu />
  </header>
);

export default injectIntl(Header);
