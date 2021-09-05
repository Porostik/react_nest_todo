const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env, argv) => {
  const mode = argv.mode || "production";
  const isProd = mode === "production";

  let minimizer = [
    new TerserPlugin({
      terserOptions: {
        format: {
          comments: false,
        },
      },
      extractComments: false,
    }),
    new CssMinimizerPlugin(),
  ];

  if (isProd) {
    minimizer = [...minimizer, new UglifyJsPlugin()];
  }

  return {
    mode: "production",
    entry: "./src/index.tsx",
    devtool: isProd ? false : "source-map",
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "js/[name].[hash].js",
      clean: true,
      publicPath: "/",
    },
    performance: {
      hints: false,
    },
    resolve: {
      alias: {
        src: path.resolve(__dirname, "/src"),
        types: path.resolve(__dirname, "/src/types"),
        components: path.resolve(__dirname, "/src/components"),
        baseComponents: path.resolve(__dirname, "/src/baseComponents"),
        services: path.resolve(__dirname, "/src/services"),
        reduxApp: path.resolve(__dirname, "/src/redux"),
      },
      extensions: [".tsx", ".ts", ".js", ".jsx", ".scss"],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      compress: true,
      port: 3000,
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
        progress: true,
      },
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)(x?)$/,
          exclude: /node_modules/,
          use: ["ts-loader"],
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: isProd,
                esModule: false,
              },
            },
          ],
        },
        {
          test: /\.s?(a|c|s)ss$/,
          exclude: [/node_modules/, path.resolve(__dirname, "./src/server")],
          use: [
            {
              loader: isProd ? MiniCssExtractPlugin.loader : "style-loader",
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: isProd,
                esModule: false,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: isProd,
              },
            },
          ],
        },
        {
          test: /\.(svg|jp(e?)g|webp|png)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "img/[name].[hash:6].[ext]",
              },
            },
          ],
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "fonts/[name].[ext]",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: "public",
            globOptions: {
              ignore: path.join(__dirname, "public/index.html"),
            },
            noErrorOnMissing: true,
          },
        ],
      }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
        inject: "body",
      }),
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin({
        filename: "css/[name].[hash:8].css",
      }),
    ],
    optimization: {
      minimize: isProd,
      minimizer,
      splitChunks: {
        cacheGroups: {
          vendors: {
            name: "vendors",
            test: /node_modules/,
            chunks: "all",
            enforce: true,
          },
        },
      },
    },
  };
};
