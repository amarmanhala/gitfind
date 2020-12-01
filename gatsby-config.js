/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Pacifico`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Cool Application`,
        short_name: `Cool App`,
        description: `The application does cool things and makes your life better.`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#fff`,
      
      },
    },
    `gatsby-plugin-react-helmet`
  ]
}