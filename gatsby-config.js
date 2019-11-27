const theme = require("./src/theme");

module.exports = {
  siteMetadata: {
    title: `Mountain Made Music`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        theme,
        stylesProvider: {
          injectFirst: true
        }
      }
    }
  ]
};
