const theme = require("./src/theme");

module.exports = {
  siteMetadata: {
    title: `Mountain Moving Company`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mountain Moving Company`,
        short_name: `MMC`,
        start_url: `/${__dirname}`,
        icon: `src/data/images/icon.png`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    `gatsby-plugin-lodash`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        theme,
        stylesProvider: {
          injectFirst: true
        }
      }
    },
    `gatsby-plugin-styled-components`
  ]
};
