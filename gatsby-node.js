const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const portfolioItemTemplate = path.resolve(
    "src/templates/portfolio-item.tsx"
  );

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            html
            frontmatter {
              path
              title
              date
              author
              tags
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors);
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: portfolioItemTemplate,
      });
    });
  });
};
