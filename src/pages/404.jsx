import React from "react";
import { injectIntl, Link } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";

import _404Styles from "./404.module.scss";

const NotFoundPage = ({ intl }) => (
  <Layout mainClass={_404Styles._404} contentClass={_404Styles.content}>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "pages.404" })} />
    <div className={_404Styles.title}>
      <h1>{intl.formatMessage({ id: "content.404.title" })}</h1>
    </div>
    <div className={_404Styles.body}>
      <p
        dangerouslySetInnerHTML={{
          __html: intl.formatMessage({ id: "content.404.body" }),
        }}
      />
    </div>
    <div>
      <Link
        to="/"
        title={`${intl.formatMessage({
          id: "pages.home",
        })} | ${intl.formatMessage({ id: "site.metadata.title" })}`}
      >
        {intl.formatMessage({ id: "return_home" })}
      </Link>
    </div>
  </Layout>
);

export default injectIntl(NotFoundPage);
