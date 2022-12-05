const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [
    new miniCssExtractPlugin({
      filename: "css/styles.css",
    }),
  ],
  entry: "./src/js/main.js",
  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "assets"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  mode: "development",
  watch: true,
};
