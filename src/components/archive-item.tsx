import React from "react";
import Img from "gatsby-image";
import Analytics, { Events } from "../analytics";

import archiveItemStyles from "./archive-item.module.scss";

const ArchiveItem = ({
  id,
  url,
  title,
  featuredImage,
  featuredImageAlt,
}: ArchiveItemProps) => {
  return (
    <a
      href={!new RegExp(/https?:\/\//).test(url) ? `https://${url}` : url}
      title={title}
      className={archiveItemStyles.link}
      onClick={() => Analytics.logEvent(Events.click_portfolio_item, id)}
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

interface ArchiveItemProps {
  id: string;
  url: string;
  title: string;
  featuredImage: any;
  featuredImageAlt: string;
}

export default ArchiveItem;
