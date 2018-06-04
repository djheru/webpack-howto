const path = require('path');

module.exports = {
  entry: {
    main: './src/main.js'
  },
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist/js'),
    publicPath: '/js'
  },
  devServer: {
    contentBase: 'dist',
    port: 8000,
    publicPath: '/js'
  }
};
