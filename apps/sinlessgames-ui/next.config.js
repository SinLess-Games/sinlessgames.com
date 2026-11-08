//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require("@nx/next")

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {},
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sinlessgamesllc.com",
        pathname: "/Sinless-Games/images/**"
      }
    ]
  }
}

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx
]

// SVGR webpack config. Nx 22 removed the nx.svgr option from withNx.
/**
 * @param {import('next').NextConfig} config
 * @returns {import('next').NextConfig}
 */
const withSvgr = (config) => {
  const originalWebpack = config.webpack
  config.webpack = (webpackConfig, ctx) => {
    // Add SVGR support with webpack 5 asset modules
    webpackConfig.module.rules.push({
      test: /.svg$/,
      oneOf: [
        {
          resourceQuery: /url/,
          type: "asset/resource",
          generator: {
            filename: "static/media/[name].[hash][ext]"
          }
        },
        {
          issuer: { not: /.(css|scss|sass)$/ },
          resourceQuery: {
            not: [
              /__next_metadata__/,
              /__next_metadata_route__/,
              /__next_metadata_image_meta__/
            ]
          },
          use: [
            {
              loader: require.resolve("@svgr/webpack"),
              options: {
                svgo: false,
                titleProp: true,
                ref: true
              }
            }
          ]
        }
      ]
    })
    return originalWebpack ? originalWebpack(webpackConfig, ctx) : webpackConfig
  }
  return config
}

module.exports = composePlugins(...plugins, withSvgr)(nextConfig)
