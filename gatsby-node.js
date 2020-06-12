const path = require("path");

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md"); // gets slug (file-name || file-name.en)
    const key = slug.replace(/\.[^\/.]+$/, ""); // removes language (if necessary)
    const lang = path.extname(slug).replace(".", ""); // gets lang code (i.e. "en")
    createNodeField({
      node,
      name: "key",
      value: key,
    });
    createNodeField({
      node,
      name: "lang",
      value: !lang ? "en" : lang,
    });
  }
};

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
            }
            fields {
              lang
              key
            }
          }
        }
      }
    }
  `);

  response.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      component: blogTemplate,
      path: `/portfolio/${node.frontmatter.slug}`,
      context: {
        key: node.fields.key,
      },
    });
  });
};
