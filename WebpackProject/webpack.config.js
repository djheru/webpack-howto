var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

const VENDOR_LIBS = [
	'faker', 'lodash', 'redux', 'react-redux', 'react-dom',
	'react', 'react-input-range', 'redux-form', 'redux-thunk'
];

module.exports = {
	entry: {
		bundle: [ 'babel-polyfill', './src/index.js' ],
		vendor: VENDOR_LIBS
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].[chunkhash].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'manifest'] }),
		new HtmlWebpackPlugin({ template: './src/index.html' })
	]
};
