const path = require("path");

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const dir = path.dirname(node.fileAbsolutePath);
    const portfolioDir = "src/portfolio";
    const articlesDir = "src/articles";

    if (dir.includes(portfolioDir)) {
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
      createNodeField({
        node,
        name: "type",
        value: "portfolio",
      });
    } else if (dir.includes(articlesDir)) {
      createNodeField({
        node,
        name: "type",
        value: "article",
      });
    } else {
      console.log("########### UNKNOWN MARKDOWN TYPE ###########");
    }
  }
};

// 1. don't build with source maps
// 2. remove [hash] from filenames
exports.onCreateWebpackConfig = (
  { stage, getConfig, actions },
  pluginOptions
) => {
  if (stage === "build-javascript") {
    const newWebpackConfig = {
      ...getConfig(),
      output: {
        filename: `[name].js`,
        chunkFilename: `[name].js`,
        path: getConfig().output.path,
        publicPath: getConfig().output.publicPath,
      },
      devtool: false,
    };
    actions.replaceWebpackConfig(newWebpackConfig);
  }
};
