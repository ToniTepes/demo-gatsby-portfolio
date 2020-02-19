module.exports = {
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '2y3275eg',
        dataset: 'production',
        watchMode: true
      }
    }
  ]
};
0