const dev = require('./webpack.dev.js');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(dev, {
  mode: 'production',
  watch: false,
  devtool: 'source-map',
  output: { filename: '[hash].js' },
  plugins: [
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      plugins: [
        imageminMozjpeg({
          quality: 80,
          progressive: true
        })
      ]
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: { map: true }
      })
    ]
  }
});
