const { join, resolve } = require('path')

module.exports = {
  modules: [join(__dirname, '..', '..', 'src'), join(__dirname, '..', '..', 'node_modules')],
  extensions: ['.js', '.css'],
  alias: {
    _components: resolve(__dirname, '..', '..', 'src', 'components'),
    _atoms: resolve(__dirname, '..', '..', 'src', 'components', 'atoms'),
    _molecules: resolve(__dirname, '..', '..', 'src', 'components', 'molecules'),
    _organisms: resolve(__dirname, '..', '..', 'src', 'components', 'organisms'),
    _templates: resolve(__dirname, '..', '..', 'src', 'components', 'templates'),
    _services: resolve(__dirname, '..', '..', 'src', 'services'),
    _pages: resolve(__dirname, '..', '..', 'src', 'pages'),
    _utils: resolve(__dirname, '..', '..', 'src', 'utils'),
    _styles: resolve(__dirname, '..', '..', 'src', 'styles'),
    _images: resolve(__dirname, '..', '..', 'src', 'images'),
    _storybook: resolve(__dirname, '..', '..', '.storybook'),
  },
}
