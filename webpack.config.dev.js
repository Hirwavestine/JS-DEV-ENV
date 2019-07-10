import path from "path";
export default {
  debug: true,
  devtool: "inline-source-map",
  nonInfo: false,
  entry: [path.resolve(__dirname, "src")],
  target: "web",
  output: {
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [],
  modules: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel"] },
      { test: /\.css$/, loaders: ["style", "css"] }
    ]
  }
};
