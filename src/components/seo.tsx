import React from "react";
import { Helmet } from "react-helmet";
import { injectIntl } from "gatsby-plugin-intl";
import { graphql, useStaticQuery } from "gatsby";

const SEO = ({ intl, title, description, bodyClass, keywords }: SEOProps) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          siteUrl
          image
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
        // {
        //   property: "og:title",
        //   content: title,
        // },
        // {
        //   property: "og:type",
        //   content: "website",
        // },
        // {
        //   property: "og:url",
        //   content: window.location.href,
        // },
        // {
        //   property: "og:site_name",
        //   content: "TausMX",
        // },
        // {
        //   property: "og:description",
        //   content: metaDescription,
        // },
        // {
        //   property: "og:image",
        //   content: `/${site.siteMetadata.image}`,
        // },
        // {
        //   name: `twitter:card`,
        //   content: `summary`,
        // },
        // {
        //   name: `twitter:creator`,
        //   content: site.siteMetadata.author,
        // },
        // {
        //   name: `twitter:title`,
        //   content: title,
        // },
        // {
        //   name: `twitter:description`,
        //   content: metaDescription,
        // },
        // {
        //   name: `twitter:image`,
        //   content: `/${site.siteMetadata.image}`,
        // },
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
