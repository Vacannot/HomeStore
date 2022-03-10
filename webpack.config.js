module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.(png|jpe?g|gif)$/i, loader: 'file-loader',},
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ],
  },
};
