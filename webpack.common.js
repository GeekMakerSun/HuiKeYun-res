const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		//app: './src/index.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			// 打包输出HTML
			title: "测试htmlWebpackPlugin",
			minify: {
				// 压缩HTML文件
				removeAttributeQuotes: true, // 移除属性的引号
				removeComments: true, // 移除HTML中的注释
				collapseWhitespace: true, // 删除空白符与换行符
				minifyCSS: true // 压缩内联css
			},
			templateParameters: (container, assets, assetTags, options) => {
				console.log(arguments)
				return {
					title: "慧科云静态资源站",
					myName: '慧科云',
					sonName:'粤ICP备2022065970号-1'
				}
			},
			inject: true, // true 或body 默认值，script标签位于html文件的 body 底部; head script 标签位于 head 标签内
			hash: true, // 引入 js 文件后面紧跟一个独特的 hash 值
			filename: "index.html", // 文件名
			// filename: 'huangbiao.html', // 文件名
			// filename:'huangbiao-[hash].html', // 带hash 值的文件名
			template: "./src/template/index.html" // 模板地址
		}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		pathinfo: false,
	},
};
