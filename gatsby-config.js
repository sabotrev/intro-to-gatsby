module.exports = {
  siteMetadata: {
    title: "Frontend Masters Gatsby Workshop",
    description: "Intro to Gatsby",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
      },
    },
  ],
}
