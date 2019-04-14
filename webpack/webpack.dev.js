import webpack from 'webpack'

import paths from './config/paths'
import rules from './config/rules'

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: paths.outputPath,
  },
  module: { rules },
  devServer: {
    contentBase: paths.outputPath,
    compress: true,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
}
