const path = require('path');

const SRC_DIR = path.join(__dirname, '/client');
const PUB_DIR = path.join(__dirname, '/public');

module.exports = {
  mode: 'development',
  context: SRC_DIR,
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
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    path: PUB_DIR,
    filename: 'q-a_bundle.js'
  }
};
