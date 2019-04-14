const { resolve } = require('path')

module.exports = {
  root: resolve(__dirname, '..', '..'),
  outputPath: resolve(__dirname, '..', '..', 'build'),
  entryPath: resolve(__dirname, '..', '..', 'src', 'index.js'),
  templatePath: resolve(__dirname, '..', '..', 'src', 'index.html'),
}
