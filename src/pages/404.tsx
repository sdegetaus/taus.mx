import React from "react";
import { injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button";

import _404Styles from "./404.module.scss";

const NotFoundPage = ({ intl }: _404Props) => (
  <Layout mainClass={_404Styles.main} contentClass={_404Styles.content}>
    <SEO title={intl.formatMessage({ id: "pages.404" })} />
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
    <div className={_404Styles.cta}>
      <Button
        to="/"
        title={`${intl.formatMessage({
          id: "pages.home",
        })} | ${intl.formatMessage({ id: "site.metadata.title" })}`}
        icon={"arrow-left"}
      >
        {intl.formatMessage({ id: "return_home" })}
      </Button>
    </div>
  </Layout>
);

interface _404Props {
  intl: any;
}

export default injectIntl(NotFoundPage);
