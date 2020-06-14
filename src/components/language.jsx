import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";
import { LanguageName } from "../static-data";

import "./language.scss";

const Language = () => {
  return (
    <>
      <IntlContextConsumer>
        {({ languages, language: current }) =>
          languages.map(lang => (
            <button
              key={lang}
              className={`link ${lang === current ? "active" : ""}`}
              onClick={() => changeLocale(lang)}
              title={LanguageName[lang]}
            >
              {lang}
            </button>
          ))
        }
      </IntlContextConsumer>
    </>
  );
};

export default Language;
