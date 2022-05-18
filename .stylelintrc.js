module.exports = {
  plugins: ['stylelint-prettier'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
    'stylelint-config-prettier',
  ],
  rules: {
    'selector-class-pattern': null,
  },
  ignoreFiles: ['**/node_modules/**'],
}
