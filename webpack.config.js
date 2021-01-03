const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // 设置相对路径
  context: path.resolve(__dirname, "./"),
  entry: {
    main: "./src/main",
  },
  output: {
    filename: "[name]_[hash:8].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // cacheDirectory 用于缓存babel的编译结果，更快重新编译
        use: ["babel-loader?cacheDirectory"],
        // include 只命中src下的文件
        include: path.resolve(__dirname, "./src"),
        // exclude 排除node_modules下的文件
        exclude: path.resolve(__dirname, "node_modules"),
      },
      {
        test: /\.css$/,

        // style-loader 将css的内容用javascript里的字符串存储起来，在网页执行js时
        // 通过DOM操作，动态的向header标签里卖弄插入style标签

        // extract--转化
        loaders: ExtractTextPlugin.extract({
          use: ["css-loader"],
        }),
      },
      {
        test: /\.(ts|tsx)/,
        use: ["awesome-typescript-loader"],
      },
    ],
  },
  resolve: {
    mainFiles: ["index"],
    alias: {
      src: "./src",
      common: "./common",
    },
    // 按顺序查找后缀文件
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
  },
  plugins: [
    // 不支持4.0.0以后的webpack
    new ExtractTextPlugin({
      filename: `[name]_[md5:contenthash:hex:8].css`,
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port: 8080,
    open: true,
    hot: true,
  },
  devtool: "source-map",
};
