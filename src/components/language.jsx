import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";
import { LanguageName } from "../static-data";

import languageStyles from "./language.module.scss";

const Language = () => {
  return (
    <>
      <IntlContextConsumer>
        {({ languages, language: current }) =>
          languages.map(lang => (
            <button
              key={lang}
              className={`${languageStyles.button} ${
                lang === current
                  ? languageStyles.active
                  : languageStyles.notActive
              }`}
              onClick={() => changeLocale(lang)}
              title={LanguageName[lang]}
            >
              <span className="fa fa-globe"></span>
              {lang}
              {/* {LanguageName[lang]} */}
            </button>
          ))
        }
      </IntlContextConsumer>
    </>
  );
};

export default Language;
