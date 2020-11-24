module.exports = {
  siteMetadata: {
    title: `Sergio Suárez`,
    description: `Sergio Suárez Portfolio website`,
    url: "https://sergiosuarez.me",
    image: "/logo.svg",
    twitterUsername: "@Seergstate",
    author: `@Seergstate`,
    languages: {
      langs: ["en", "es"],
      defaultLangKey: "en",
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: ["en", "es"],
        defaultLanguage: "en",
        redirect: true,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Poppins:500,600,700&display=swap"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "files",
        path: `${__dirname}/src/files`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Sergio Suárez",
        short_name: "Sergio Suárez",
        start_url: "/",
        display: "standalone",
        icon: "src/svg/logo-dark.svg",
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/*`,
          `/en/*`,
          `/es/*`,
          `/en/projects/*`,
          `/es/projects/*`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-PS3ZTBV`,
        includeInDevelopment: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
  ],
};
