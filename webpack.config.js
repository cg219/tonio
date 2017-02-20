const path = require('path');
const ExtractText = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundles.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractText.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            }),
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
            scss: 'vue-style-loader!css-loader!sass-loader'
          }
        }
      }, 
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ExtractText('styles.css')
  ]
}