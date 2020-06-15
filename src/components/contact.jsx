import React from "react";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl";

import { Email } from "../static-data";

import contactStyles from "./contact.module.scss";

const Contact = ({ intl }) => {
  return (
    <div className={contactStyles.contact}>
      <h4>{intl.formatMessage({ id: "content.contact.title" })}</h4>
      <p>
        {intl.formatMessage({ id: "content.contact.body" })}{" "}
        <button
          id={"email"}
          onClick={() =>
            (window.location.href = `mailto:${Email.name}@${Email.domain}}`)
          }
        >
          {Email.name}
          <span className="fa fa-at"></span>
          {Email.domain}
        </button>
      </p>
    </div>
  );
};

export default injectIntl(Contact);
