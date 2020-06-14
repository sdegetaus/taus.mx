import React from "react";
import { Link } from "gatsby-plugin-intl";
import { Img } from "gatsby-image";

import "font-awesome/scss/font-awesome.scss";
import "./archive.scss";

const Archive = props => {
  const nodes = props.data.allMarkdownRemark.edges;
  return (
    <div className={"archive"}>
      {nodes.map(({ node }) => {
        const n = node.frontmatter.featuredImage ? node.frontmatter.featuredImage.childImageSharp.fluid : null;
        return (
          <Link key={node.fields.key} to={`/portfolio/${node.frontmatter.slug}`}>
            {console.log(n)}
            {n ?
              // <Img fluid={n}></Img>
              <p></p>
              :
              <img src={"https://picsum.photos/400/225"} />
            }
            <div className={"metadata"}>
              <h3>{node.frontmatter.title}</h3>
              <div className={"tags"}>
                <span className={"fa fa-tags"}></span>
                <span>
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
        )
      })}
    </div>
  );
};

export default Archive;
