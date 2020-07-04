module.exports = {
  siteMetadata: {
    author: "Santiago Degetau",
    siteUrl: "https://www.taus.mx",
    image: "screenshot.png",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "TausMX",
        short_name: "TMX",
        description:
          "Santiago Degetau's online portfolio: Mexican graphic designer, 3D artist, web & game developer and a professional hobbyist.",
        lang: "en",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#102b44",
        display: "standalone",
        icon: "src/images/favicon.png",
        localize: [
          {
            start_url: "/es/",
            lang: "es",
            name: "TausMX",
            short_name: "TMX",
            description:
              "Portafolio de Santiago Degetau: Diseñador Gráfico, Artista 3D, Desarrollador y Programador Web Mexicano.",
          },
        ],
      },
    },
    "gatsby-plugin-advanced-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-catch-links",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-intl",
      options: {
        path: `${__dirname}/src/intl`,
        languages: ["en", "es"],
        defaultLanguage: "en",
        redirect: false,
      },
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        RewriteBase: true,
        https: true,
        www: true,
        host: "www.rubixgame.com",
      },
    },
  ],
};
