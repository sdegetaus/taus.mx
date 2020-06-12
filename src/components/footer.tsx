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
    <footer>
      <span>
        ©{new Date().getFullYear()}.{" "}
        <Link to="/">{data.site.siteMetadata.author}</Link>.&nbsp;
        {intl.formatMessage({ id: "all_rights_reserved" })}.
      </span>
    </footer>
  );
};

export default injectIntl(Footer);
