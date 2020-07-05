import React from "react";
import { Helmet } from "react-helmet";
import { injectIntl } from "gatsby-plugin-intl";
import { graphql, useStaticQuery } from "gatsby";
import { Version } from "../static-data";

const SEO = ({ intl, title, description, bodyClass, keywords }: SEOProps) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          siteUrl
        }
      }
    }
  `);

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
      titleTemplate={`%s - ${intl.formatMessage({
        id: "site.metadata.title",
      })}`}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          name: "author",
          content: site.siteMetadata.author,
        },
        {
          name: "keywords",
          content: metaKeywords,
        },
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
          property: "og:title",
          content: `${title} - ${intl.formatMessage({
            id: "site.metadata.title",
          })}`,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: site.siteMetadata.author,
        },
        {
          name: "twitter:title",
          content: `${title} - ${intl.formatMessage({
            id: "site.metadata.title",
          })}`,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
        {
          name: "version",
          content: Version,
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

interface SEOProps {
  intl: any;
  title?: string;
  description?: string;
  bodyClass?: string;
  keywords?: string[];
}

export default injectIntl(SEO);
