import React from "react";
import Layout from "../components/layout";
import { injectIntl } from "gatsby-plugin-intl";

const Attributions = ({ intl }) => {
  return (
    <Layout mainClass={indexStyles.main} innerClass={indexStyles.inner}>
      <SEO
        lang={intl.locale.toString()}
        title={intl.formatMessage({ id: "pages.home" })}
      />
    </Layout>
  );
};

export default injectIntl(Attributions);
