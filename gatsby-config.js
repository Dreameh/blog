module.exports = {
  pathPrefix: "/gatsby-orga",
  siteMetadata: {
    title: 'Luke\'s Dev Corner',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-transformer-orga`,
      options: {
        // if you don't want to have server side prism code highlight
        // noHighlight: true,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // Kek
      },
    }
  ],
};
