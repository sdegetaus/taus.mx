import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import { Email } from "../static-data";

import SocialIcons from "./social-icons";

import styles from "./contact.module.scss";

const Contact = ({ intl }: FooterProps) => {
  return (
    <div className={styles.contact}>
      <h4>{intl.formatMessage({ id: "content.contact.title" })}</h4>
      <p>
        {intl.formatMessage({ id: "content.contact.body" })}{" "}
        <button
          id={"email"}
          title={intl.formatMessage({ id: "content.contact.cta_title" })}
          onClick={() => {
            window.location.href = `mailto:${Email.name}@${Email.domain}`;
          }}
        >
          {Email.name}
          <span className="fa fa-at"></span>
          {Email.domain}
        </button>
      </p>
      <SocialIcons />
    </div>
  );
};

interface FooterProps {
  intl: any;
}

export default injectIntl(Contact);
