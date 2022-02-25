module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'array-bracket-spacing': 'error',
    'react-native/no-inline-styles': 0,
    'comma-spacing': [
      2,
      {
        after: true,
        before: false
      }
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    semi: ['error', 'never'],
    'template-curly-spacing': ['error', 'always'],
    'valid-jsdoc': 'off',
    'comma-dangle': 0
  }
}
