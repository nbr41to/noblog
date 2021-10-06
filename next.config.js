const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});

module.exports = withMDX({
  env: {},
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  reactStrictMode: true,
  images: {
    domains: [
      'grass-graph.appspot.com',
      'www.notion.so',
      's3.us-west-2.amazonaws.com',
    ],
  },
});
