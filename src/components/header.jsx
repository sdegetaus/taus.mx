import React from "react";
import Menu from "./menu";
import { injectIntl, Link } from "gatsby-plugin-intl";

import "./header.scss";

const Header = ({ intl }) => (
  <header className="section">
    <div className="inner">
      <div className="logo">
        <Link to="/">
          <h1>
            Taus<span>MX</span>
          </h1>
        </Link>
      </div>
      <Menu />
    </div>
  </header>
);

export default injectIntl(Header);
