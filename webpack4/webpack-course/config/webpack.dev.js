const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: [ './src/main.js' ]
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
    },
    hot: true
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
        test: /\.html$/,
        use: [
          // Using HTMLWebpackPlugin instead
          // { loader: 'file-loader', options: { name: '[name].html' } }, // loads up html files
          // { loader: 'extract-loader' }, // extract into a separate file
          { loader: 'html-loader', options: { attrs: ['img:src']} } // lint and load html
        ]
      },
      {
        test: /\.(jpg|gif|png)$/,
        use: [
          { loader: 'file-loader', options: { name: 'images/[name]-[hash:8].[ext]' }}
        ]
      },
      {
        test: /\.pug/,
        use: [
          { loader: 'pug-loader' }
        ]
      },
      {
        test: /\.hbs/,
        use: [
          { loader: 'handlebars-loader', query: { inlineRequires: '/images/' } }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index.ejs',
      title: 'Link\'s Journal'
    })
  ]
};
