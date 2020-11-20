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
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
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
          families: ["Poppins"],
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
  ],
};
