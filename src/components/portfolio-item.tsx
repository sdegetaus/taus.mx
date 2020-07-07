import React from "react";
import Img from "gatsby-image";

import styles from "./portfolio-item.module.scss";

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
      className={styles.link}
      rel={"noopener"}
    >
      {featuredImage ? (
        <Img
          className={styles.image}
          fluid={featuredImage.childImageSharp.fluid}
          title={title}
          alt={featuredImageAlt}
        />
      ) : (
        <img
          className={styles.image}
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
