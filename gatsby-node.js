const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve("./src/templates/portfolio-post.tsx");
  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              lang
            }
          }
        }
      }
    }
  `);

  //   response.data.allSitePage.edges.forEach(({ node }) => {
  //     createPage({
  //       component: node.component,
  //       path: node.path,
  //       context: {
  //         lang: node.language,
  //       },
  //     });
  //   });

  response.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      component: blogTemplate,
      path: `/portfolio/${node.frontmatter.slug}`,
      context: {
        slug: node.frontmatter.slug,
        lang: node.frontmatter.lang,
      },
    });
  });
};
