import CleanWebpackPlugin from 'clean-webpack-plugin'

import paths from './config/paths'
import rules from './config/rules'

module.exports = {
  mode: 'production',
  output: {
    filename: `${paths.jsFolder}/[name].[hash].js`,
    path: paths.outputPath,
    chunkFilename: '[name].[chunkhash].js',
  },
  module: {
    rules,
  },
  plugins: [
    new CleanWebpackPlugin([paths.outputPath.split('/').pop()], {
      root: paths.root,
    }),
  ],
  devtool: 'source-map',
}
