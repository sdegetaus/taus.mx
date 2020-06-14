import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import { graphql } from "gatsby";
import { SocialData } from "../static-data";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Archive from "../components/archive";

import "font-awesome/scss/font-awesome.scss";
import indexStyles from "./index.module.scss";

export const query = graphql`
  query($language: String!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { lang: { eq: $language } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            author
            slug
            tags
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            lang
            key
          }
        }
      }
    }
  }
`;

const IndexPage = ({ intl, data }) => {
  return (
    <Layout mainClass={indexStyles.main} innerClass={indexStyles.inner}>
      <SEO
        lang={intl.locale.toString()}
        title={intl.formatMessage({ id: "pages.home" })}
      />
      <div className={indexStyles.content}>
        <div className={indexStyles.title}>
          <h1
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "content.home.title" }),
            }}
          />
        </div>
        <div className={indexStyles.body}>
          <p>{intl.formatMessage({ id: "content.home.body" })}</p>
        </div>
        <ul className={indexStyles.icons}>
          {SocialData.map(key => (
            <li key={key.name}>
              <a
                className={`${key.icon}`}
                href={key.url}
                title={key.name}
                aria-label={key.name}
              ></a>
            </li>
          ))}
        </ul>
      </div>
      <Archive data={data} />
      <div className={indexStyles.cta}>
        <h4>{intl.formatMessage({ id: "content.home.cta.title" })}</h4>
        <p
          // onClick={() => document.execCommand("copy")}
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: "content.home.cta.body" }),
          }}
        />
      </div>
    </Layout>
  );
};

export default injectIntl(IndexPage);
