import React from "react";
import { injectIntl, Link } from "gatsby-plugin-intl";
import Language from "./language";

const menuItems = [
  {
    key: "home",
    path: "/",
    id: "pages.home",
  },
  {
    key: "about",
    path: "/about",
    id: "pages.about",
  },
  {
    key: "contact",
    path: "/contact",
    id: "pages.contact",
  },
];

const Menu = ({ intl }) => {
  return (
    <ul>
      {menuItems.map(item => (
        <li key={item.key}>
          <Link to={`${item.path}`}>{intl.formatMessage({ id: item.id })}</Link>
        </li>
      ))}
      <li>
        <Language />
      </li>
    </ul>
  );
};

export default injectIntl(Menu);
