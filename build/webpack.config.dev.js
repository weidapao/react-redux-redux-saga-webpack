const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.config.base');

module.exports = function() {
  return webpackMerge(commonConfig, {});
};
