const path = require('path');

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/
			},
			{
				use: [
					'style-loader', // takes the parsed css and adds it to the html document
					'css-loader' // instructions for webpack to parse css
				], // applied in reverse order!
				test: /\.css$/
			}
		]
	}
};

module.exports = config;
