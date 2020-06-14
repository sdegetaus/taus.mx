import React from "react";
import { Link } from "gatsby-plugin-intl";
import Img from "gatsby-image";

import "font-awesome/scss/font-awesome.scss";
import "./archive.scss";

const Archive = props => {
  const nodes = props.data.allMarkdownRemark.edges;
  return (
    <div className={"archive"}>
      {nodes.map(({ node }) => {
        const {
          slug,
          title,
          tags,
          featuredImage,
          featuredImageAlt,
        } = node.frontmatter;
        return (
          <Link key={node.fields.key} to={`/portfolio/${slug}`}>
            {featuredImage ? (
              <Img
                fluid={featuredImage.childImageSharp.fluid}
                alt={featuredImageAlt}
              />
            ) : (
              <div className={"no-thumbnail"}></div>
            )}
            <div className={"metadata"}>
              <h3>{title}</h3>
              <div className={"tags"}>
                <span className={"fa fa-tags"}></span>
                <span>
                  {tags
                    .map(
                      tag =>
                        tag.charAt(0).toUpperCase() +
                        tag.substr(1).toLowerCase()
                    )
                    .join(", ")}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Archive;
