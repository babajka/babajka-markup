const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		filename: './src/bundle.js'
	},
	module: {
		rules: [{
			test: /\.scss$/,
			loader: extractTextPlugin.extract({use: 'css-loader!sass-loader'})
		}]
	},
	plugins: [
		new extractTextPlugin({
			filename: './src/styles.css',
			allChunks: true
		})
	]
};