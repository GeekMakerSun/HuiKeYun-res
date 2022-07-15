const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
	mode: 'production',
	/*devtool: 'source-map',*/
	plugins: [
		new CopyPlugin({
			patterns: [
				{from: "assets", force: true},
				{from: "node_modules/bootstrap/dist", to: "bootstrap", force: true},
				{from: "node_modules/@popperjs/core/dist", to: "@popperjs", force: true},
			],
			options: {
				concurrency: 500,
			},
		}),
	],
});
