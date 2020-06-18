import React from "react";
import { Helmet } from "react-helmet";
import { injectIntl } from "gatsby-plugin-intl";
import { graphql, useStaticQuery } from "gatsby";

const SEO = (props: any) => {
  const { intl, title, description, bodyClass, keywords } = props;
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

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
        lang: intl.locale,
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
          content: site.siteMetadata.author,
        },
        {
          name: `keywords`,
          content: metaKeywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    >
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-169687622-1"
      ></script>
      <script type="text/javascript">{`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'UA-169687622-1');

      `}</script>
    </Helmet>
  );
};

export default injectIntl(SEO);
