const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';
const assetPath = path.resolve(__dirname, 'src/assetbundles/vzurlfield');
const srcPath = path.join(assetPath, 'src');
const distPath = path.join(assetPath, 'dist');

module.exports = {
  entry: {
    VzUrl: path.resolve(srcPath, 'js/VzUrlField.js'),
  },
  output: {
    path: distPath,
    publicPath: '/cpresources/vzurl/',
    filename: '[name].js',
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(distPath),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /(\.svg$)/,
        loaders: [
          {
            loader: 'svg-url-loader',
          },
        ],
      },
    ],
  },
};
