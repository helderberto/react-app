let cssVariables = {}

const typography = {
  'font-family': "'Ubuntu', sans-serif",
  'font-size-title': '20px',
  'line-height-title': '24px',
  'font-size-text': '16px',
  'font-size-big-text': '32px',
  'font-size-label': '12px',
  'font-weight-light': 300,
  'font-weight-regular': 400,
  'line-height-text': 1,
  'line-height-label': '16px',
  'font-size-warning': '11px',
  'line-height-big-text': '32px',
}

const colors = {
  blue: '#0075b0',
  'dark-blue': '#00517a',
  teal: '#00abad',
  green: '#7ab800',
  'dark-green': '#558000',
  orange: '#f57c19',
  red: '#f51919',
  'dark-red': '#c60909',
  black: '#000000',
  grey: '#666666',
  white: '#FFFFFF',
  'light-gray-1': '#999999',
  'light-gray-2': '#DDDDDD',
  'light-gray-3': '#CCCCCC',
  'light-gray-4': '#FAFAFA',
  'light-gray-5': '#f3f3f3',
  'light-gray-6': '#f6f6f6',
  'light-gray-7': '#eeeeee',
  'light-gray-8': '#979797',
  'light-gray-9': '#e1e1e1',
  'light-gray-10': '#ebebeb',
  'dark-gray-1': '#444444',
  'dark-gray-2': '#c8c8c8',
  'dark-gray-3': '#e4e4e4',
}

const spacement = {
  'margin-bottom': '20px',
  'border-radius': '5px',
}

cssVariables = {
  ...typography,
  ...colors,
  ...spacement,
}

module.exports = { ...cssVariables }
