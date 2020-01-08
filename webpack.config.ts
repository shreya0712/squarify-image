import webpack from "webpack";
import path from "path";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import CompressionWebpackPlugin from "compression-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const configuration: webpack.Configuration = {
  entry: path.resolve(__dirname, "src/index.tsx"),
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  devtool: "source-map",
  target: "web",
  output: {
    path: path.resolve(__dirname, "build"),
    libraryTarget: "umd",
    library: "squarifyImage"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              presets: ["@babel/preset-typescript", "@babel/preset-env"]
            }
          },
          {
            loader: "ts-loader",
            options: {
              context: __dirname,
              configFile: "tsconfig.json"
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CompressionWebpackPlugin({
      test: /^index\.js$/i,
      filename: "[path].br[query]",
      algorithm: "brotliCompress"
    }),
    new CompressionWebpackPlugin({
      test: /^index\.js$/i
    }),
    new CleanWebpackPlugin({
      verbose: true
    })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "@emotion/core": "@emotion/core",
    "@emotion/styled": "@emotion/styled"
  }
};
if (process.env.ANALYZE) {
  (configuration.plugins || []).push(new BundleAnalyzerPlugin());
}

export default configuration;
