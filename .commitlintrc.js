module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        '*',
        'core',
        'common',
        'about',
        'article',
        'edit-article',
        'select',
        'modal',
        'main',
        'login',
        'tools',
        'stubs',
      ],
    ],
    'scope-empty': [2, 'never'],
    'type-enum': [2, 'always', ['fix', 'style', 'feat', 'chore', 'task', 'major', 'merge']],
  },
};
