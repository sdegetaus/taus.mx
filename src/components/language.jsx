import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";

import "./language.scss";

const Language = () => {
  return (
    <>
      <IntlContextConsumer>
        {({ language }) => (
          <button
            className="link"
            onClick={() => changeLocale(language === "en" ? "es" : "en")}
          >
            {language === "en" ? "es" : "en"}
          </button>
        )}
      </IntlContextConsumer>
    </>
  );
};

// const Language = () => {
//   return (
//     <ul className={"language"}>
//       <IntlContextConsumer>
//         {({ languages, language: currentLocale }) =>
//           languages.map(lang => (
//             <li key={lang} className={lang === currentLocale ? "active" : ""}>
//               <a onClick={() => changeLocale(lang)}>{lang}</a>
//             </li>
//           ))
//         }
//       </IntlContextConsumer>
//     </ul>
//   );
// };

export default Language;
