import * as T from "./types";

export const Version = require("../package.json").version;

export const SocialData: T.SocialKey[] = [
  {
    name: "GitHub",
    icon: "fa fa-github",
    url: new URL("https://github.com/sdegetaus"),
  },
  {
    name: "Behance",
    icon: "fa fa-behance-square",
    url: new URL("https://www.behance.net/SantiagoDegetau"),
  },
];

export const Languages: T.Languages = {
  en: "English",
  es: "Español",
};

export const Email: T.Email = {
  name: "santiago",
  domain: "taus.mx",
};

export const Attributions: T.Attribution[] = [
  {
    name: "font-awesome",
    text: "<strong>FontAwesome</strong>",
    url: new URL("https://fontawesome.com/"),
  },
  {
    name: "gatsby-js",
    text: "<strong>Gatsby.js</strong>",
    url: new URL("https://www.gatsbyjs.org/"),
  },
  {
    name: "realistic-frame",
    text: "Frame vector created by <strong>freepik</strong>",
    url: new URL("https://www.freepik.com/free-photos-vectors/frame"),
  },
];

export const Technologies: T.Technology[] = [
  {
    title: "Unity 3D",
    name: "Unity",
  },
  {
    title: null,
    name: "React.js",
  },
  {
    title: null,
    name: "Gatsby.js",
  },
  {
    title: null,
    name: "Node.js",
  },
  {
    title: "WordPress",
    name: "WordPress",
  },
  {
    title: "Adobe Illustrator",
    name: "Illustrator",
  },
  {
    title: "Adobe Photoshop",
    name: "Photoshop",
  },
  {
    title: "Maxon Cinema 4D",
    name: "Cinema 4D",
  },
  {
    title: null,
    name: "3D",
  },
  {
    title: null,
    name: "Javascript",
  },
  {
    title: "C-Sharp",
    name: "C#",
  },
  {
    title: null,
    name: "PHP",
  },
  {
    title: null,
    name: "WooCommerce",
  },
  {
    title: null,
    name: "SEO",
  },
  {
    title: null,
    name: "TypeScript",
  },
  {
    title: null,
    name: "Sass",
  },
  {
    title: "Markup Language",
    name: "HTML5",
  },
  {
    title: null,
    name: "SQL",
  },
];
