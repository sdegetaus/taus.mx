import React from "react";
import { Link } from "gatsby-plugin-intl";

import "font-awesome/scss/font-awesome.scss";
import "./archive.scss";

const Archive = props => {
  const nodes = props.data.allMarkdownRemark.edges;
  return (
    <div className={"archive"}>
      {nodes.map(({ node }) => (
        <Link key={node.fields.key} to={`/portfolio/${node.frontmatter.slug}`}>
          <img src={"https://picsum.photos/400/225"} />
          <div className={"metadata"}>
            <h3>{node.frontmatter.title}</h3>
            <div className={"tags"}>
              <span className={"fa fa-tags"}></span>
              <span className={""}>
                {node.frontmatter.tags
                  .map(
                    tag =>
                      tag.charAt(0).toUpperCase() + tag.substr(1).toLowerCase()
                  )
                  .join(", ")}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Archive;
