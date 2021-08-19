const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

const config = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    client: {
      logging: 'info',
    },
    compress: true,
    host: 'localhost',
    port: 3001,
    hot: true,
    historyApiFallback: true,
  },
  stats: 'errors-warnings',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
});

module.exports = config;
