import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Contact from "../components/contact";

import aboutStyles from "./about.module.scss";
import { Technologies } from "../static-data";

const AboutPage = ({ intl }: AboutProps) => {
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

  return (
    <Layout contentClass={aboutStyles.content} innerClass={aboutStyles.inner}>
      <SEO title={intl.formatMessage({ id: "pages.about" })} />
      <div className={aboutStyles.body}>
        <div className={aboutStyles.card}>
          <Img
            fluid={profileImage.childImageSharp.fluid}
            className={aboutStyles.cardImage}
          />
          <div className={aboutStyles.cardContent}>
            <h1 className={aboutStyles.cardTitle}>
              {intl.formatMessage({ id: "content.about.title" })}
            </h1>
            <p
              className={aboutStyles.cardBody}
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "content.about.bio" }),
              }}
            />
            <ul className={aboutStyles.tags}>
              {Technologies.map(tech => (
                <li key={tech.name} title={tech.title ? tech.title : tech.name}>
                  {tech.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Contact />
    </Layout>
  );
};

interface AboutProps {
  intl: any;
}

export default injectIntl(AboutPage);
