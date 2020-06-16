interface SocialKey {
  name: string;
  icon: string;
  url: URL;
}

interface Email {
  name: string;
  domain: string;
}

interface Attribution {
  name: string;
  text: string;
  url: URL;
}

interface Technology {
  title: string;
  name: string;
}

export const SocialData: SocialKey[] = [
  {
    name: "GitHub",
    icon: "fa fa-github",
    url: new URL("https://github.com/sdegetaus"),
  },
  {
    name: "Instagram",
    icon: "fa fa-instagram",
    url: new URL("https://instagram.com/santiago.degetau"),
  },
];

export const LanguageName = {
  en: "English",
  es: "Español",
};

export const Email: Email = {
  name: "santiago",
  domain: "taus.mx",
};

export const Attributions: Attribution[] = [
  {
    name: "font-awesome",
    text: "Icons from <strong>FontAwesome</strong>",
    url: new URL("https://fontawesome.com/"),
  },
  {
    name: "gatsby-js",
    text: "Website created using <strong>Gatsby.js</strong>",
    url: new URL("https://www.gatsbyjs.org/"),
  },
  {
    name: "isometric-macbook",
    text: "MacBook Pro mockup by <strong>Shakuro</strong>",
    url: new URL(
      "https://dribbble.com/shots/3657246-FREE-isometric-MacBook-Pro-15-mockup"
    ),
  },
  {
    name: "realistic-frame",
    text: "Frame vector created by <strong>freepik</strong>",
    url: new URL("https://www.freepik.com/free-photos-vectors/frame"),
  },
];

export const Technologies: Technology[] = [
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
    title: null,
    name: "GraphQL",
  },
  {
    title: "Markup Language",
    name: "HTML5",
  },
  {
    title: "Rust Language",
    name: "Rust",
  },
  {
    title: null,
    name: "SQL",
  },
];
