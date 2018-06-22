const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
// const MinifyPlugin = require('babel-minify-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = env => { // passes the env vars in!
  return {
    entry: {
      main: [ './src/main.js' ]
    },
    mode: 'production',
    output: {
      filename: '[name]-bundle.js',
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/'
    },
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
            // { loader: 'style-loader' }, // second, inject into html
            { loader: MiniCSSExtractPlugin.loader },
            { loader: 'css-loader', options: { minimize: true } } // first, lint and load css
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
      new OptimizeCssAssetsPlugin(),
      new MiniCSSExtractPlugin({
        filename: '[name]-[contenthash].css'
      }),
      new HTMLWebpackPlugin({
        template: './src/index.ejs',
        title: 'Link\'s Journal'
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV)
      }),
      // new MinifyPlugin()
      // new UglifyJSPlugin()
    ]
  }
};
