const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');
const withReactSvg = require('next-react-svg');
const path = require('path');

const webpack = require('webpack');

const isProd = (process.env.NODE_ENV || 'production') === 'production';

const assetPrefix = isProd ? '/value-driven-templates' : '';

if (typeof require !== 'undefined') {
  require.extensions['.less'] = () => {};
}

module.exports = withReactSvg(
  withLess(
    withSass({
      assetPrefix,
      lessLoaderOptions: {
        javascriptEnabled: true,
      },
      webpack: (config) => {
        config.plugins.push(
          new webpack.DefinePlugin({
            'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
          })
        );

        return config;
      },
      include: path.resolve(__dirname, 'public/icons'),
    })
  )
);
