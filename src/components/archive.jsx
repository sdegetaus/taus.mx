import React from "react";

import ArchiveItem from "./archive-item";

import archiveStyles from "./archive.module.scss";

const Archive = props => {
  const nodes = props.data.allMarkdownRemark.edges;
  return nodes.length > 0 ? (
    <div className={archiveStyles.archive}>
      {nodes.map(({ node }) => {
        return <ArchiveItem key={node.fields.key} {...node.frontmatter} />;
      })}
    </div>
  ) : (
    <h4>Nothing here!</h4>
  );
};

export default Archive;
