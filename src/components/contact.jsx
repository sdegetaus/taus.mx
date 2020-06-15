import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import { Email } from "../static-data";

import SocialIcons from "../components/social-icons";

import contactStyles from "./contact.module.scss";

const Contact = ({ intl }) => {
  return (
    <div className={contactStyles.contact}>
      <h4>{intl.formatMessage({ id: "content.contact.title" })}</h4>
      <p>
        {intl.formatMessage({ id: "content.contact.body" })}{" "}
        <button
          id={"email"}
          onClick={() => {
            window.location = `mailto:${Email.name}@${Email.domain}`;
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

export default injectIntl(Contact);
