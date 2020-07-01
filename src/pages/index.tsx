import React from "react";
import { injectIntl, Link } from "gatsby-plugin-intl";
import { graphql } from "gatsby";
import Analytics, { Events } from "../analytics";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Archive from "../components/archive";
import Contact from "../components/contact";
import SocialIcons from "../components/social-icons";
import Posts from "../components/posts";

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
            date
            title
            url
            tags
            featuredImageAlt
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

const IndexPage = ({ intl, data }: IndexProps) => {
  return (
    <Layout mainClass={indexStyles.main} innerClass={indexStyles.inner}>
      <SEO title={intl.formatMessage({ id: "pages.home" })} />
      <div className={indexStyles.content}>
        <div className={indexStyles.title}>
          <h1>
            {intl.formatMessage({ id: "content.home.title" })}{" "}
            <Link
              to={"/about"}
              title={`${intl.formatMessage({
                id: "pages.about",
              })} | ${intl.formatMessage({ id: "site.metadata.title" })}`}
              onClick={() => Analytics.logEvent(Events.click_about)}
            >
              Santiago
            </Link>
          </h1>
        </div>
        <div className={indexStyles.body}>
          <p>{intl.formatMessage({ id: "content.home.body" })}</p>
        </div>
        <SocialIcons />
      </div>
      <Archive data={data} />
      <Posts />
      <Contact />
    </Layout>
  );
};

interface IndexProps {
  intl: any;
  data: any;
}

export default injectIntl(IndexPage);
