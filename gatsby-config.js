/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'BlackBox',
    author: 'Prem Saraswat',
    description: 'Personal blog by Prem Saraswat.',
    siteUrl: 'https://prem.codes',
    social: {
      twitter: '@prmsrswt',
    },
  },
  pathPrefix: '/blog',
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
};
