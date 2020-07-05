import React from "react";
import { injectIntl, Link } from "gatsby-plugin-intl";
import Language from "./language";

import menuStyles from "./menu.module.scss";

const Menu = ({ intl }: MenuProps) => {
  return (
    <div className={`${menuStyles.menu}`}>
      <nav>
        <ul>
          <li className={`${menuStyles.item}`}>
            <Link
              to={`/`}
              activeClassName={menuStyles.active}
              title={intl.formatMessage({ id: "pages.home" })}
              rel={"noopener"}
            >
              <span className="fa fa-home"></span>
            </Link>
          </li>
          <li className={`${menuStyles.item} ${menuStyles.language}`}>
            <Language />
          </li>
        </ul>
      </nav>
    </div>
  );
};

interface MenuProps {
  intl: any;
}

export default injectIntl(Menu);
