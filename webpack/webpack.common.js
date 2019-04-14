import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import resolve from './config/resolve'
import paths from './config/paths'
import rules from './config/rules'

module.exports = {
  entry: paths.entryPath,
  module: { rules },
  resolve,
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.templatePath,
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        preserveLineBreaks: true,
        minifyURLs: true,
        removeComments: true,
        removeAttributeQuotes: true,
      },
    }),
  ],
}
