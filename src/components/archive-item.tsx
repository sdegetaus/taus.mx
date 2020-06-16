import React from "react";
import Img from "gatsby-image";

import archiveItemStyles from "./archive-item.module.scss";

const ArchiveItem = ({ url, title, featuredImage, featuredImageAlt }) => {
  return (
    <a
      href={!new RegExp(/https?:\/\//).test(url) ? `https://${url}` : url}
      title={title}
      className={archiveItemStyles.link}
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
