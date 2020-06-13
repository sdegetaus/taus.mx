import React from "react";
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";

import aboutStyles from "./about.module.scss";

const AboutPage = ({ intl }) => (
  <Layout
    pageName={aboutStyles.about}
    innerClass={aboutStyles.inner}
    mainClass={`vertical-space`}
  >
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "pages.about" })} />
    <div className={`${aboutStyles.body}`}>
      <div className={`${aboutStyles.image}`}>
        <img src="" alt="" />
      </div>
      <div className={`${aboutStyles.title}`}>
        <h2>{intl.formatMessage({ id: "content.about.title" })}</h2>
      </div>
      <div className={`${aboutStyles.content}`}>
        <p
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: "content.about.body" }),
          }}
        />
      </div>
    </div>
  </Layout>
);

export default injectIntl(AboutPage);
