const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  context: `${__dirname}/client`,
  entry: './index.js',
  watch: true,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    ]
  },
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  }
};
