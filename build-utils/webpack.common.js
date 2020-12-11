module.exports = {
  entry: ["./src/index.js", "./src/styles/index.scss"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|glb|gltf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.obj$/,
        loader: "webpack-obj-loader",
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: __dirname + "./../dist",
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: "./dist",
    publicPath: "/",
    historyApiFallback: true,
  },
};
