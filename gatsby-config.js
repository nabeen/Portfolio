module.exports = {
  siteMetadata: {
    title: "nabeen.be",
    author: "nabeen",
    description: "nabeen's Portfolio Site"
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "nabeen.be",
        short_name: "nabeen.be",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
        orientation: "portrait",
        icons: [
          {
            src: `/icon/favicon-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/icon/favicon-256.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
          {
            src: `/icon/favicon-384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
          {
            src: `/icon/favicon-512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`
  ],
}
