require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  downloadLocal: true,
}; // if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

module.exports = {
  siteMetadata: {
    title: "Dent Sector Fund",
    siteUrl: "https://dentsectorfund.com.au"
  },
  pathPrefix: "/gatsby-contentful-starter",
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    `gatsby-transformer-inline-svg`,
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: `gatsby-transformer-video`,
    },
    `gatsby-plugin-catch-links`,
    "gatsby-plugin-webpack-bundle-analyser-v2",
  ],
};
