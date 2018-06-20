const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: [
      'webpack-hot-middleware/client?reload=true',
      './src/main.js'
    ]
  },
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist',
    port: 8000,
    publicPath: '/',
    overlay: true, // display errors on browser
    stats: {
      colors: true
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          { loader: 'babel-loader' }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [// run in reverse order
          { loader: 'style-loader' }, // second, inject into html
          { loader: 'css-loader' } // first, lint and load css
        ]
      },
      {
        test: /\.(jpg|gif|png)$/,
        use: [
          { loader: 'file-loader', options: { name: 'images/[name]-[hash:8].[ext]' }}
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index.ejs',
      inject: true,
      title: 'Link\'s Journal'
    })
  ]
};
