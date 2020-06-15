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
        <div>
          <h3 className={`${archiveItemStyles.title}`}>{title}</h3>
          <div className={`${archiveItemStyles.tags}`}>
            <i className={`${archiveItemStyles.tagsIcon} fa fa-tags`}></i>
            {tags.join(", ")}
          </div>
        </div>
        <i className={`${archiveItemStyles.linkIcon} fa fa-external-link`}></i>
      </div>
    </a>
  );
};

export default ArchiveItem;
