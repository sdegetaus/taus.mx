import React from "react";
import { injectIntl, Link } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";

const IndexPage = ({ intl, data }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "pages.home" })} />
    <h1
      dangerouslySetInnerHTML={{
        __html: intl.formatMessage({ id: "content.home.title" }),
      }}
    />
    <p>{intl.formatMessage({ id: "content.home.body" })}</p>
    <hr />
    <div>
      {data.allMarkdownRemark.edges.map(item => {
        const id = item.node.id;
        const { path, title, date, author } = item.node.frontmatter;
        return (
          <Link to={path} key={id}>
            <small>{date}</small>
            <h3>{title}</h3>
            <p>by {author}</p>
          </Link>
        );
      })}
    </div>
  </Layout>
);

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
            tags
          }
        }
      }
    }
  }
`;

export default injectIntl(IndexPage);
