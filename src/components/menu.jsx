import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import Language from "./language";

import "./menu.scss";

// const menuItems = [
//   {
//     key: "home",
//     path: "/",
//     id: "pages.home",
//   },
//   {
//     key: "about",
//     path: "/about",
//     id: "pages.about",
//   },
//   {
//     key: "contact",
//     path: "/contact",
//     id: "pages.contact",
//   },
// ];

const Menu = ({ intl }) => {
  return (
    <div className={"menu"}>
      <nav>
        <ul>
          {/* {menuItems.map(item => (
            <li key={item.key} className={"item"}>
              <Link to={`${item.path}`} activeClassName={"active"}>
                {intl.formatMessage({ id: item.id })}
              </Link>
            </li>
          ))} */}
          <li className={"item language"}>
            <Language />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default injectIntl(Menu);
