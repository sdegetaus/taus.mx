module.exports = {
  siteMetadata: {
    title: `Santiago Degetau's Design & Web Development Portfolio`,
    description: `Santiago Degetau's online portfolio: Mexican visual designer, 3D artist, web & game developer and a professional hobbyist`,
    author: `Santiago Degetau`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `es`],
        defaultLanguage: `en`,
        redirect: false,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
  ],
};
