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
        { from: "static" },
        { from: "node_modules/bootstrap/dist", to: "bootstrap" },
      ],
      options: {
        concurrency: 500,
      },
    }),
  ],
}
