import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Contact from "../components/contact";

import aboutStyles from "./about.module.scss";
import SocialIcons from "../components/social-icons";

const AboutPage = ({ intl }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: {
          internal: { mediaType: { regex: "/image/" } }
          base: { eq: "santiago-degetau.jpg" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const profileImage = data.images.edges[0].node;
  console.log(profileImage);

  return (
    <Layout contentClass={aboutStyles.content} innerClass={aboutStyles.inner}>
      <SEO title={intl.formatMessage({ id: "pages.about" })} />
      <div className={aboutStyles.body}>
        <div className={`${aboutStyles.card} ${aboutStyles.bio}`}>
          <Img
            fluid={profileImage.childImageSharp.fluid}
            className={`${aboutStyles.cardImage}`}
          />
          <div className={`${aboutStyles.cardContent}`}>
            <h1>{intl.formatMessage({ id: "content.about.title" })}</h1>
            <p
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "content.about.bio" }),
              }}
            />
            <SocialIcons iconSize={26} />
          </div>
        </div>
        <div className={`${aboutStyles.card} ${aboutStyles.bio}`}>
          <Img
            fluid={profileImage.childImageSharp.fluid}
            className={`${aboutStyles.cardImage}`}
          />
          <div className={`${aboutStyles.cardContent}`}>
            <h1>{intl.formatMessage({ id: "content.about.title" })}</h1>
            <p
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "content.about.bio" }),
              }}
            />
            <SocialIcons iconSize={26} />
          </div>
        </div>
      </div>
      <Contact />
    </Layout>
  );
};

export default injectIntl(AboutPage);
