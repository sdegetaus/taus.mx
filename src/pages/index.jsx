import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "font-awesome/scss/font-awesome.scss";
import "./index.scss";

export const query = graphql`
  query($language: String!) {
    allMarkdownRemark(filter: { fields: { lang: { eq: $language } } }) {
      edges {
        node {
          frontmatter {
            title
            date
            author
            slug
            tags
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
    <Layout mainClass={"index"}>
      <SEO
        lang={intl.locale.toString()}
        title={intl.formatMessage({ id: "pages.home" })}
      />
      <div className="title">
        <h3
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: "content.home.title" }),
          }}
        />
      </div>
      <div className="body">
        <p>{intl.formatMessage({ id: "content.home.body" })}</p>
      </div>
    </Layout>
  );
};

export default injectIntl(IndexPage);
