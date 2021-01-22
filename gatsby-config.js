/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require('path');

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-typescript`,
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@src': path.resolve(__dirname, './src/'),
          '@components': path.resolve(__dirname, './src/components/'),
          '@styles': path.resolve(__dirname, './src/styles/'),
          '@static': path.resolve(__dirname, './src/static/'),
          '@layouts': path.resolve(__dirname, './src/layouts/'),
          '@pages': path.resolve(__dirname, './src/pages/'),
        },
        extensions: ['tsx', 'js', 'ts'],
      },
    },
  ],
};
