module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
  },
  rules: {
    // prettier overrides
    'prettier/prettier': 'error',

    'import/no-extraneous-dependencies': 'off',
  },
};
