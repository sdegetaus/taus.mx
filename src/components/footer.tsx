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
          <span
            className={`${footerStyles.copy}`}
            title={`${data.site.siteMetadata.author} | ${intl.formatMessage({
              id: "all_rights_reserved",
            })}`}
          >
            <i className={`${footerStyles.copyrightIcon} fa fa-copyright`}></i>
            {new Date().getFullYear()}&nbsp;&ndash;&nbsp;
            <Link
              to="/about"
              activeStyle={{
                pointerEvents: "none",
                cursor: "default",
              }}
            >
              {data.site.siteMetadata.author}
              <sup className={"fa fa-question-circle"}></sup>
            </Link>
            &nbsp;&nbsp;
            <Link
              to="/attributions"
              className={footerStyles.attributions}
              activeStyle={{
                pointerEvents: "none",
                cursor: "default",
              }}
            >
              {intl.formatMessage({ id: "pages.attributions" })}
              <span className={"fa fa-external-link"}></span>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default injectIntl(Footer);
