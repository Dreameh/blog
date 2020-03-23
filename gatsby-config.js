const postCssPresetEnv = require(`postcss-preset-env`);
const postCSSNested = require(`postcss-nested`);
const postCSSUrl = require(`postcss-url`);
const postCSSImports = require(`postcss-import`);
const cssnano = require(`cssnano`);
const postCSSMixins = require(`postcss-mixins`);

module.exports = {
  siteMetadata: {
    title: `ルーカス日記`,
    description: `Blog about Linux, Emacs and development.`,
    copyrights:
      '2020 © Dreamo --- Starter created by <a href="https://radoslawkoziel.pl">panr</a>',
    author: `@dreeameh`,
    logo: {
      src: ``,
      alt: ``,
    },
    logoText: `ルーカス日記`,
    defaultTheme: `dark`,
    postsPerPage: 5,
    showMenuItems: 3,
    menuMoreText: `More`,
    mainMenu: [
      {
        title: `KDrama List`,
        path: `/kdrama-list`,
      },
      // {
      //   title: 'Tools',
      //   path: '/tools',
      // },
      {
        title: `About`,
        path: `/about`,
      },
    ],
  },
  plugins: [
    `babel-preset-gatsby`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          postCSSUrl(),
          postCSSImports(),
          postCSSMixins(),
          postCSSNested(),
          postCssPresetEnv({
            importFrom: `src/styles/variables.css`,
            stage: 1,
            preserve: false,
          }),
          cssnano({
            preset: `default`,
          }),
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              related: false,
              noIframeBorder: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 100,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`,
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dreamo Theme`,
        short_name: `dreamo`,
        start_url: `/`,
        background_color: `#292a2d`,
        theme_color: `#292a2d`,
        display: `minimal-ui`,
        icon: `src/images/hello-icon.png`,
      },
    },
  ],
};
