import React from "react";
import { graphql } from "gatsby";
import { injectIntl, Link } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";

export const query = graphql`
  query($slug: String!, $language: String! = "en") {
    markdownRemark(
      frontmatter: { slug: { eq: $slug }, lang: { eq: $language } }
    ) {
      frontmatter {
        title
        author
        date
        tags
      }
      html
    }
  }
`;

const PortfolioPost = ({ intl, data }) => {
  console.log(data);

  return (
    <Layout>
      {data.markdownRemark ? (
        <>
          <SEO
            lang={intl.locale}
            title={data.markdownRemark.frontmatter.title}
            keywords={data.markdownRemark.frontmatter.tags}
          />
          <Link to={`/`}>Go back</Link>
          <hr />
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.frontmatter.html,
            }}
          />
          {data.markdownRemark.frontmatter.tags.join(", ")}
        </>
      ) : (
        <h1>No data found</h1>
      )}
    </Layout>
  );
};

export default injectIntl(PortfolioPost);
