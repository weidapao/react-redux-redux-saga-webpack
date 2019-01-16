const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.config.base');

module.exports = function() {
  return webpackMerge(commonConfig, {
    devServer: {
      overlay: {
        // 将报错显示在页面上
        warnings: true,
        errors: true
      },
      historyApiFallback: true // 解决BrowserRouter刷新后404的问题
    }
  });
};
