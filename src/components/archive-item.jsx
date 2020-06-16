import React from "react";
import Img from "gatsby-image";

import archiveItemStyles from "./archive-item.module.scss";

const ArchiveItem = props => {
  const { url, title, featuredImage, featuredImageAlt } = props;
  console.log(props);

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
