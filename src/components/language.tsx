import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";

const Language = () => {
  return (
    <ul>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <li
              key={language}
              className={language === currentLocale ? "active" : ""}
            >
              <a onClick={() => changeLocale(language)}>{language}</a>
            </li>
          ))
        }
      </IntlContextConsumer>
    </ul>
  );
};

export default Language;
