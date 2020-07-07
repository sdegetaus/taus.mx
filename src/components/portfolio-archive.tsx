import React from "react";

import PortfolioItem from "./portfolio-item";

import styles from "./portfolio-archive.module.scss";

const PortfolioArchive = ({ edges }: PortfolioArchiveProps) => {
  return edges.length > 0 ? (
    <div className={styles.archive}>
      {edges.map(({ node }) => {
        return (
          <PortfolioItem
            key={node.fields.key}
            id={node.fields.key}
            {...node.frontmatter}
          />
        );
      })}
    </div>
  ) : (
    <h4>Nothing here!</h4>
  );
};

interface PortfolioArchiveProps {
  edges: any;
}

export default PortfolioArchive;
