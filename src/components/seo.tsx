import React from "react";
import { Helmet } from "react-helmet";
import { injectIntl } from "gatsby-plugin-intl";
import { graphql, useStaticQuery } from "gatsby";

const SEO = ({
  intl,
  lang = `en`,
  title,
  description = "",
  meta = {},
  keywords = [],
}) => {
  // grab site's metadata
  const siteMetadata = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `).site.siteMetadata;

  // normalize metadata
  const metaDescription =
    description || intl.formatMessage({ id: "site.metadata.description" });
  const metaKeywords =
    keywords?.join(",") || intl.formatMessage({ id: "site.metadata.keywords" });

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s – ${intl.formatMessage({
        id: "site.metadata.title",
      })}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: siteMetadata.author,
        },
        {
          name: `keywords`,
          content: metaKeywords,
        },
      ]}
    />
  );
};

export default injectIntl(SEO);
