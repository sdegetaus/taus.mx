import React from "react";
import Menu from "./menu";
import { injectIntl, Link } from "gatsby-plugin-intl";

import "./header.scss";

const Header = ({ intl }) => (
  <header className="section">
    <div className="inner">
      <div className="logo">
        <Link
          to="/"
          title={`${intl.formatMessage({
            id: "pages.home",
          })} | ${intl.formatMessage({ id: "site.metadata.title" })}`}
        >
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
