const theme = require("./src/theme");

module.exports = {
  siteMetadata: {
    title: `Mountain Moving Company`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        theme,
        stylesProvider: {
          injectFirst: true
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mountain Moving Company`,
        short_name: `MMC`,
        start_url: `/`,
        icon: `src/images/icon.png`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
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
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    }
  ]
};
