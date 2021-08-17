module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['grass-graph.appspot.com'],
  },
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
})