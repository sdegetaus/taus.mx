import React from "react";
import { injectIntl, Link } from "gatsby-plugin-intl";

const Footer = ({ intl }) => (
  <footer>
    <span>
      ©{new Date().getFullYear()}. <Link to="/">Santiago Degetau</Link>.&nbsp;
      {intl.formatMessage({ id: "all_rights_reserved" })}.
    </span>
  </footer>
);

export default injectIntl(Footer);
