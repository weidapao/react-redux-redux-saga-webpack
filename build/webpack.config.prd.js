const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.config.base');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function() {
  return webpackMerge(commonConfig, {
    plugins: [new BundleAnalyzerPlugin()]
  });
};