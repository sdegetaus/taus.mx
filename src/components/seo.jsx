import React from "react";
import { Helmet } from "react-helmet";
import { injectIntl } from "gatsby-plugin-intl";
import { graphql, useStaticQuery } from "gatsby";

const SEO = (props) => {
  const { intl, lang = "en", title, description, bodyClass, keywords } = props;
  const query = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  // grab site's metadata
  const siteMetadata = query.site.siteMetadata;

  // default meta pairs
  const defaultMeta = [
    {
      name: `theme-color`,
      content: `#102b44`,
    },
    {
      name: `msapplication-navbutton-color`,
      content: `#102b44`,
    },
    {
      name: `apple-mobile-web-app-capable`,
      content: `yes`,
    },
    {
      name: `apple-mobile-web-app-status-bar-style`,
      content: `black-translucent`,
    },
    {
      name: `robots`,
      content: `max-snippet:-1, max-image-preview:large, max-video-preview:-1`,
    },
  ];

  // normalize metadata
  const metaDescription =
    description || intl.formatMessage({ id: "site.metadata.description" });
  const metaKeywords =
    keywords?.join(",") || intl.formatMessage({ id: "site.metadata.keywords" });

  return (
    <Helmet
      bodyAttributes={{ class: bodyClass ?? "" }}
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s – ${intl.formatMessage({
        id: "site.metadata.title",
      })}`}
      meta={[
        ...defaultMeta,
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
