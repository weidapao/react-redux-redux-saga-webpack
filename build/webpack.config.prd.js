const webpackMerge = require('webpack-merge');
const path = require('path');
const commonConfig = require('./webpack.config.base');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function() {
  return webpackMerge(commonConfig, {
    plugins: [
      // 打包前删除上一次的打包文件
      new CleanWebpackPlugin(['dist'], {
        root: path.resolve(__dirname, '../'),
        verbose: true,
        dry: false
      }),
      new BundleAnalyzerPlugin()
    ]
  });
};
