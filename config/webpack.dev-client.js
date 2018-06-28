const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  name: 'client',
  entry: {
    vendor: ['react', 'react-dom'],
    main: [
      'react-hot-loader/patch',
      'babel-runtime/regenerator',
      'babel-register',
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
          { loader: 'file-loader', options: { name: 'images/[name].[ext]' }}
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]"
            }
          },
          { loader: "extract-loader" },
          {
            loader: "html-loader",
            options: {
              attrs: ["img:src"]
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          { loader: 'markdown-with-front-matter-loader' }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    new HTMLWebpackPlugin({
      template: './src/index.ejs',
      inject: true,
      title: 'Link\'s Journal'
    })
  ]
};
