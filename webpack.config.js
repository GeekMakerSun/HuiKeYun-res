const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/bundle.js',
    clean: true
  },
  mode: 'production',
  plugins: [
    new CopyPlugin({
      patterns: [
        {from: "static", force: true},
        {from: "node_modules/bootstrap/dist", to: "bootstrap", force: true},
        {from: "node_modules/@popperjs/core/dist", to: "/@popperjs", force: true},
      ],
      options: {
        concurrency: 500,
      },
    }),
  ],
}
