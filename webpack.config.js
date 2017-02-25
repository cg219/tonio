const path = require('path');
const ExtractText = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
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
            scss: ExtractText.extract({
              use: 'css-loader!sass-loader',
              fallback: 'vue-style-loader'
            }),
            sass: 'vue-style-loader!css-loader!sass-loader&indetendSyntax'
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
  ],
  externals: {
    async: 'commonjs async'
  }
}