import React from "react";
import { Link } from "gatsby-plugin-intl";

import "./archive.scss";

const Archive = props => {
  const nodes = props.data.allMarkdownRemark.edges;
  return (
    <div className={"archive"}>
      {nodes.map(({ node }) => (
        <Link
          key={node.fields.key}
          to={`/portfolio/${node.frontmatter.slug}`}
          className={"item"}
        >
          <img className={"item-image"} src={"https://picsum.photos/400/225"} />
          <h3 className={"item-title"}>{node.frontmatter.title}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Archive;
