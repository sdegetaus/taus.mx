import React from "react";
import Layout from "../components/layout";
import { injectIntl } from "gatsby-plugin-intl";

import SEO from "../components/seo";
import { Attributions as List } from "../static-data";

import attributionsStyles from "./attributions.module.scss";

const Attributions = ({ intl }) => {
  return (
    <Layout mainClass={attributionsStyles.main}>
      <SEO
        lang={intl.locale.toString()}
        title={intl.formatMessage({ id: "pages.attributions" })}
      />
      <div className={attributionsStyles.title}>
        <h1>{intl.formatMessage({ id: "pages.attributions" })}</h1>
      </div>
      <div className={attributionsStyles.body}>
        {List.length > 0 ? (
          <ul>
            {List.map(key => (
              <li key={key.name}>
                <button>{key.text}</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No data.</p>
        )}
      </div>
    </Layout>
  );
};

export default injectIntl(Attributions);
