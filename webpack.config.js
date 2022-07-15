const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
    clean: true
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        {from: "assets", force: true},
        {from: "node_modules/bootstrap/dist", to: "bootstrap", force: true},
        {from: "node_modules/@popperjs/core/dist", to: "/@popperjs", force: true},
      ],
      options: {
        concurrency: 500,
      },
    }),
  ],
}
