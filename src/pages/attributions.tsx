import React from "react";
import Layout from "../components/layout";
import { injectIntl } from "gatsby-plugin-intl";

import SEO from "../components/seo";
import { Attributions as List } from "../static-data";

import attributionsStyles from "./attributions.module.scss";

const Attributions = ({ intl }: AttributionsProps) => {
  return (
    <Layout
      mainClass={attributionsStyles.main}
      innerClass={attributionsStyles.inner}
    >
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
                  target={"_blank"}
                  aria-label={key.name}
                  rel={"noopener noreferrer nofollow"}
                  href={key.url.toString()}
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

interface AttributionsProps {
  intl: any;
}

export default injectIntl(Attributions);
