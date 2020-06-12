import React from "react";
import { graphql } from "gatsby";
import { injectIntl, Link } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";

function PortfolioItem({ intl, data }) {
  const itemData = data.markdownRemark;
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={itemData.frontmatter.title}
        keywords={itemData.frontmatter.tags}
      />
      <Link to={`/`}>Go back</Link>
      <hr />
      <h1>{itemData.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: itemData.html }} />
      {itemData.frontmatter.tags.join(", ")}
    </Layout>
  );
}

export const postQuery = graphql`
  query PortfolioItemByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
        tags
      }
    }
  }
`;

export default injectIntl(PortfolioItem);
