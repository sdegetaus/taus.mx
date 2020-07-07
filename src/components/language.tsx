import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";
import { Languages } from "../static-data";
import Analytics, { Events } from "../analytics";

import styles from "./language.module.scss";

const Language = () => {
  return (
    <>
      <IntlContextConsumer>
        {({ languages, language: current }) =>
          languages.map((lang: string) => (
            <button
              key={lang}
              className={`${styles.button} ${
                lang === current ? styles.active : styles.notActive
              }`}
              onClick={() => {
                Analytics.logEvent(Events.change_languge, lang);
                changeLocale(lang);
              }}
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

interface LanguageProps {}

export default Language;
