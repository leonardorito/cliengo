const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  devtool: "",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    // Enable compression
    compress: true,

    // Enable hot reloading
    hot: true,

    port: 3000,

    // Public path is root of content base
		publicPath: "/",
		historyApiFallback: true
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './public/template.html',
			inject: true
		})
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	}
};
