module.exports = {
  // '**/*.ejs': ['npm run gulp html:lint'],
  '**/*.scss': ['npm run prettier-stylelint', /* 'npm run gulp sass:lint', */ 'git add'],
  '**/*.js': ['npm run prettier', 'npm run eslint', 'git add'],
  '**/*.md': ['npm run prettier', 'git add'],
};
