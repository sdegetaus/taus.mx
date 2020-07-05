import React from "react";
import Menu from "./menu";
import { injectIntl, Link } from "gatsby-plugin-intl";

import structStyles from "../styles/structure.module.scss";
import headerStyles from "./header.module.scss";

const Header = ({ intl }: HeaderProps) => (
  <header className={`${headerStyles.header} ${structStyles.section}`}>
    <div className={`${structStyles.inner}`}>
      <div className={`${headerStyles.logo}`}>
        <Link
          rel={"noopener"}
          to="/"
          title={`${intl.formatMessage({
            id: "pages.home",
          })} | ${intl.formatMessage({ id: "site.metadata.title" })}`}
        >
          Taus<span>MX</span>
        </Link>
      </div>
      <Menu />
    </div>
  </header>
);

interface HeaderProps {
  intl: any;
}

export default injectIntl(Header);
