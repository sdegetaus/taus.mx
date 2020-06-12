import React from "react";
import { injectIntl, Link } from "gatsby-plugin-intl";
import { graphql, useStaticQuery } from "gatsby";

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
    <footer className="section">
      <div className="inner">
        <div className="footer-meta">
          <span>
            ©{new Date().getFullYear()}.{" "}
            <Link to="/">{data.site.siteMetadata.author}</Link>.&nbsp;
            {intl.formatMessage({ id: "all_rights_reserved" })}.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default injectIntl(Footer);
