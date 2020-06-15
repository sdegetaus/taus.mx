import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Contact from "../components/contact";

import aboutStyles from "./about.module.scss";
import SocialIcons from "../components/social-icons";
import { Technologies } from "../static-data";

// Object.defineProperty(Array.prototype, "shuffle", {
//   value: function () {
//     for (let i = this.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [this[i], this[j]] = [this[j], this[i]];
//     }
//     return this;
//   },
// });

const AboutPage = ({ intl }) => {
  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

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
            <h1 className={`${aboutStyles.cardTitle}`}>
              {intl.formatMessage({ id: "content.about.title" })}
            </h1>
            <p
              className={aboutStyles.cardBody}
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: "content.about.bio" }),
              }}
            />
            <SocialIcons iconSize={26} />
          </div>
        </div>
        <div className={`${aboutStyles.card} ${aboutStyles.tech}`}>
          <div className={`${aboutStyles.cardContent}`}>
            <h1 className={`${aboutStyles.cardTitle}`}>Technologies</h1>
            <ul>
              {shuffle(Technologies).map(tech => (
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

export default injectIntl(AboutPage);
