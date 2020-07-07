import React from "react";
import { injectIntl, Link } from "gatsby-plugin-intl";
import { graphql } from "gatsby";
import Analytics, { Events } from "../analytics";

import SEO from "../components/seo";
import Layout from "../components/layout";
import PortfolioArchive from "../components/portfolio-archive";
import Contact from "../components/contact";
import SocialIcons from "../components/social-icons";
import Articles from "../components/article-archive";

import styles from "./index.module.scss";

export const query = graphql`
  query($language: String!) {
    portfolioItems: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { lang: { eq: $language }, type: { eq: "portfolio" } } }
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            url
            tags
            featuredImageAlt
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 500) {
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
    articleItems: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { type: { eq: "article" } } }
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            slug
            url
          }
          excerpt(pruneLength: 300, format: HTML)
        }
      }
    }
  }
`;

const IndexPage = ({ intl, data }: IndexProps) => {
  return (
    <Layout mainClass={styles.main} innerClass={styles.inner}>
      <SEO title={intl.formatMessage({ id: "pages.home" })} />
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>
            {intl.formatMessage({ id: "content.home.title" })}{" "}
            <Link
              to={"/about"}
              rel={"noopener"}
              title={`${intl.formatMessage({
                id: "pages.about",
              })} | ${intl.formatMessage({ id: "site.metadata.title" })}`}
              onClick={() => Analytics.logEvent(Events.click_about)}
            >
              Santiago
            </Link>
          </h1>
        </div>
        <div className={styles.body}>
          <p>{intl.formatMessage({ id: "content.home.body" })}</p>
        </div>
        <SocialIcons />
      </div>
      <PortfolioArchive edges={data.portfolioItems.edges} />
      <Articles edges={data.articleItems.edges} />
      <Contact />
    </Layout>
  );
};

interface IndexProps {
  intl: any;
  data: any;
}

export default injectIntl(IndexPage);
