module.exports = {
  siteMetadata: {
    title: `NU Open - Fall 2020`,
    siteUrl: "https://nuopen.kz",
    description: `First-ever open ICPC-style competition held in the walls of Nazarbayev University.`,
    keywords: "icpc, nu, nazarbayev university, nu open, acm icpc, nuopen",
    email: `organizers@nuopen.kz`,
    formLink: "https://nuopen.typeform.com/to/XMifQa",
    author: `@ironsoul`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-158866644-2",
      },
    },
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NU Open - Fall 2020`,
        short_name: `nuopen`,
        start_url: `/`,
        background_color: `#333644`,
        theme_color: `#333644`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
