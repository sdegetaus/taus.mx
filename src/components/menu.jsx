import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import Language from "./language";

import menuStyles from "./menu.module.scss";

const Menu = ({ intl }) => {
  return (
    <div className={`${menuStyles.menu}`}>
      <nav className={`${menuStyles.nav}`}>
        <ul>
          <li className={`${menuStyles.item}`}>
            <Language />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default injectIntl(Menu);
