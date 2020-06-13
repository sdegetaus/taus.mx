import React from "react";
import { injectIntl, Link } from "gatsby-plugin-intl";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import indexStyles from "./index.module.scss";

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
    <Layout
      pageName={"index"}
      mainClass={`vertical-space ${indexStyles.wrapper}`}
    >
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "pages.home" })}
      />
      <div className={indexStyles.title}>
        <h3
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: "content.home.title" }),
          }}
        />
      </div>
      <div className={indexStyles.body}>
        <p>{intl.formatMessage({ id: "content.home.body" })}</p>
      </div>

      {/* <ul>
        {data.allMarkdownRemark.edges.map(item => {
          const key = item.node.fields.key;
          const { slug, title, date, author } = item.node.frontmatter;
          return (
            <li key={key}>
              <Link to={`/portfolio/${slug}`}>
                <h3>{title}</h3>
              </Link>
            </li>
          );
        })}
      </ul> */}
    </Layout>
  );
};

export default injectIntl(IndexPage);
