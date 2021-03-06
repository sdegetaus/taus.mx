import React from "react";
import { injectIntl, Link } from "gatsby-plugin-intl";
import { graphql, useStaticQuery } from "gatsby";

import structStyles from "../styles/structure.module.scss";
import styles from "./footer.module.scss";

const Footer = ({ intl }: FooterProps) => {
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
    <footer className={`${styles.footer} ${structStyles.section}`}>
      <div className={`${structStyles.inner} ${styles.inner}`}>
        <div className={`${styles.meta}`}>
          <span
            className={`${styles.copy}`}
            title={`${data.site.siteMetadata.author} | ${intl.formatMessage({
              id: "all_rights_reserved",
            })}`}
          >
            <i className={`${styles.copyrightIcon} fa fa-copyright`}></i>
            {new Date().getFullYear()}&nbsp;
            <Link
              rel={"noopener"}
              to="/about"
              title={data.site.siteMetadata.author}
              activeStyle={{
                pointerEvents: "none",
                cursor: "default",
              }}
            >
              {data.site.siteMetadata.author}
              <sup className={"fa fa-question-circle"}></sup>
            </Link>
            &ndash;&nbsp;
            {intl.formatMessage({ id: "all_rights_reserved" })}
            <br />
            <Link
              rel={"noopener"}
              to="/attributions"
              className={styles.attributions}
              title={intl.formatMessage({ id: "pages.attributions" })}
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

interface FooterProps {
  intl: any;
}

export default injectIntl(Footer);
