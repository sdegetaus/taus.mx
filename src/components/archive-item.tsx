import React from "react";
import Img from "gatsby-image";
import Analytics, { Events } from "../analytics";

import archiveItemStyles from "./archive-item.module.scss";

const ArchiveItem = ({ id, url, title, featuredImage, featuredImageAlt }) => {
  return (
    <a
      href={!new RegExp(/https?:\/\//).test(url) ? `https://${url}` : url}
      title={title}
      className={archiveItemStyles.link}
      onClick={() =>
        Analytics.logEventWithParams(Events.click_portfolio_item, id)
      }
    >
      {featuredImage ? (
        <Img
          className={archiveItemStyles.image}
          fluid={featuredImage.childImageSharp.fluid}
          title={title}
          alt={featuredImageAlt}
        />
      ) : (
        <img
          className={archiveItemStyles.image}
          src="https://picsum.photos/505/285"
          title={title}
          alt={title}
        />
      )}
    </a>
  );
};

export default ArchiveItem;
