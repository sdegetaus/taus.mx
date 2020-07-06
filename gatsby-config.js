module.exports = {
  siteMetadata: {
    author: "Santiago Degetau",
    siteUrl: "https://www.taus.mx",
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
        icons: [
          {
            src: "favicons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "favicons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "favicons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "favicons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "favicons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "favicons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "favicons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "favicons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        localize: [
          {
            start_url: "/es/",
            lang: "es",
            name: "TausMX",
            short_name: "TMX",
            description:
              "Portafolio de Santiago Degetau: Diseñador gráfico, artista 3D, desarrollador y programador web mexicano.",
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
        host: "www.taus.mx",
      },
    },
  ],
};
