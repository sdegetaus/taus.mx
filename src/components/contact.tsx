import React from "react";
import { injectIntl } from "gatsby-plugin-intl";
import { Email } from "../static-data";
import Analytics, { Events } from "../analytics";

import SocialIcons from "./social-icons";

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
            Analytics.logEvent(Events.click_email);
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

export default injectIntl(Contact);
