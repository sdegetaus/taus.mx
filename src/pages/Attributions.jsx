import React from "react";
import Layout from "../components/layout";
import { injectIntl } from "gatsby-plugin-intl";

import SEO from "../components/seo";
import { Attributions as List } from "../static-data";

import attributionsStyles from "./attributions.module.scss";

const Attributions = ({ intl }) => {
  return (
    <Layout mainClass={attributionsStyles.main}>
      <SEO title={intl.formatMessage({ id: "pages.attributions" })} />
      <div className={attributionsStyles.title}>
        <h1>{intl.formatMessage({ id: "pages.attributions" })}</h1>
      </div>
      <div className={attributionsStyles.body}>
        {List.length > 0 ? (
          <ul>
            {List.map(key => (
              <li key={key.name}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  aria-label={key.name}
                  href={key.href}
                  dangerouslySetInnerHTML={{
                    __html: `<p>${key.text}</p><span class="fa fa-external-link"></span>`,
                  }}
                />
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
