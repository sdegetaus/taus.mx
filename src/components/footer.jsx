import React from "react";
import { injectIntl, Link } from "gatsby-plugin-intl";
import { graphql, useStaticQuery } from "gatsby";

import structStyles from "../styles/structure.module.scss";
import footerStyles from "./footer.module.scss";

const Footer = ({ intl }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <footer className={`${footerStyles.footer} ${structStyles.section}`}>
      <div className={`${structStyles.inner} ${footerStyles.inner}`}>
        <div className={`${footerStyles.meta}`}>
          <span className={`${footerStyles.copy}`}>
            <i className={`${footerStyles.copyrightIcon} fa fa-copyright`}></i>
            {new Date().getFullYear()}&nbsp;&ndash;&nbsp;
            <Link to="/about">
              {data.site.siteMetadata.author}
              <sup className={"fa fa-question-circle"}></sup>
            </Link>
            {/* &nbsp;//&nbsp; */}
            {/* {intl.formatMessage({ id: "all_rights_reserved" })}.&nbsp; */}
            {/* <Link to="/attributions" className={footerStyles.attributions}>
              {intl.formatMessage({ id: "pages.attributions" })}
              <span className={"fa fa-external-link"}></span>
            </Link> */}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default injectIntl(Footer);
