import React from "react";
import { injectIntl, Link } from "gatsby-plugin-intl";
import Language from "./language";

import styles from "./menu.module.scss";

const Menu = ({ intl }: MenuProps) => {
  return (
    <div className={`${styles.menu}`}>
      <nav>
        <ul>
          <li className={`${styles.item}`}>
            <Link
              to={`/`}
              activeClassName={styles.active}
              title={intl.formatMessage({ id: "pages.home" })}
              rel={"noopener"}
            >
              <span className="fa fa-home"></span>
            </Link>
          </li>
          <li className={`${styles.item} ${styles.language}`}>
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
