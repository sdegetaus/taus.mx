import React from "react";
import { injectIntl, Link } from "gatsby-plugin-intl";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export const query = graphql`
  query($language: String!) {
    allMarkdownRemark(filter: { frontmatter: { lang: { eq: $language } } }) {
      edges {
        node {
          frontmatter {
            title
            slug
            date
            author
            lang
          }
          id
        }
      }
    }
  }
`;

const IndexPage = ({ intl, data }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "pages.home" })}
      />
      <h1
        dangerouslySetInnerHTML={{
          __html: intl.formatMessage({ id: "content.home.title" }),
        }}
      />
      <p>{intl.formatMessage({ id: "content.home.body" })}</p>
      <hr />
      <ul>
        {data.allMarkdownRemark.edges.map(item => {
          const id = item.node.id;
          const { slug, title, date, author } = item.node.frontmatter;
          return (
            <li key={id}>
              <Link to={`/portfolio/${slug}`}>
                <h3>{title}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default injectIntl(IndexPage);
