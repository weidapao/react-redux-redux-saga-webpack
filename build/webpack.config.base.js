const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
    publicPath: '/' // 解决BrowserRouter刷新后404的问题
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader','postcss-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader','postcss-loader', 'less-loader'] }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};
