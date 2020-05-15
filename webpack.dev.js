const path = require('path');
const webpack = require('webpack');
const PostCSSPresetEnv = require('postcss-preset-env');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  stats: { colors: true },
  // Can't use faster eval due to a bug with MiniCssExtractPlugin
  // see https://github.com/webpack-contrib/mini-css-extract-plugin/issues/29
  devtool: 'cheap-module-source-map',
  entry: [
    path.resolve(__dirname, 'src/scripts/index.js'),
    path.resolve(__dirname, 'src/styles/index.scss')
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/assets'),
    publicPath: '/assets/'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    // Will create a `webpack.njk` with the css/jss files
    // that then gets picked up by eleventy
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'webpack.html'),
      filename: path.resolve(__dirname, 'src/_includes/webpack.njk'),
      // Hash is used for cache busting the generated webpack.html
      // while keeping the same file name in the output
      hash: true,
      inject: false
    }),
    // This is how to do it for webpack plugins
    // https://stackoverflow.com/questions/28969861/managing-jquery-plugin-dependency-in-webpack/28989476#28989476
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            // Does not respect devtools option
            // https://github.com/webpack-contrib/css-loader/issues/622
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [PostCSSPresetEnv],
              // Does not respect devtools option
              sourceMap: true
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[contenthash].[ext]',
              outputPath: 'images'
            }
          }
        ]
      }
    ]
  }
};
