import React from "react";
import Menu from "./menu";
import { injectIntl, Link } from "gatsby-plugin-intl";

import structStyles from "../styles/structure.module.scss";
import headerStyles from "./header.module.scss";

const Header = ({ intl }) => (
  <header className={`${headerStyles.header} ${structStyles.section}`}>
    <div className={`${structStyles.inner}`}>
      <div className={`${headerStyles.logo}`}>
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
