const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: "./index.jsx",
  output: {
    path: path.join(__dirname, '/dist'),
    filename: "bundle.js",
    publicPath: '/dist'
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'postcss-loader',
        enforce: 'pre',
        options: {
          plugins: function () {
            return [autoprefixer('last 2 versions', 'ie 10')]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    inline:true,
    port: 8081
  }
};