import React from "react";
import { injectIntl } from "gatsby-plugin-intl";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Contact from "../components/contact";

import aboutStyles from "./about.module.scss";

const AboutPage = ({ intl }) => (
  <Layout mainClass={aboutStyles.main} contentClass={aboutStyles.content}>
    <SEO title={intl.formatMessage({ id: "pages.about" })} />
    <div className={aboutStyles.body}>
      <div className={aboutStyles.card}>
        <h1>About me</h1>
        <p>
          Hello there! My name is Santiago Degetau, I am a twenty-something year
          old designer &amp; developer living in Mexico. I have over five years
          of work experience in graphic design, more than two years of
          programming know-how and an unlimited drive to learn and improve every
          day.
        </p>
      </div>
    </div>
    <Contact />
  </Layout>
);

export default injectIntl(AboutPage);
