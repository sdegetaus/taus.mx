import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";
import { Languages } from "../static-data";

import languageStyles from "./language.module.scss";

const Language = () => {
  return (
    <>
      <IntlContextConsumer>
        {({ languages, language: current }) =>
          languages.map((lang: string) => (
            <button
              key={lang}
              className={`${languageStyles.button} ${
                lang === current
                  ? languageStyles.active
                  : languageStyles.notActive
              }`}
              onClick={() => changeLocale(lang)}
              title={Languages[lang]}
            >
              <span className="fa fa-globe"></span>
              {lang}
            </button>
          ))
        }
      </IntlContextConsumer>
    </>
  );
};

export default Language;
