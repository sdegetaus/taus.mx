import React from "react";
import Img from "gatsby-image";

import archiveItemStyles from "./archive-item.module.scss";

const ArchiveItem = props => {
  const { url, title, tags, featuredImage, featuredImageAlt } = props;

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
          alt={featuredImageAlt}
        />
      ) : (
        <img
          className={archiveItemStyles.image}
          src="https://picsum.photos/505/285"
          alt=""
        />
      )}

      <div className={`${archiveItemStyles.metadata}`}>
        <h3>{title}</h3>
        <span className={"fa fa-external-link"}></span>
      </div>
    </a>
  );
};

export default ArchiveItem;
