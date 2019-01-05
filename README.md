# babajka-markup

[![npm version](https://badge.fury.io/js/babajka-markup.svg)](https://badge.fury.io/js/babajka-markup)
[![Build Status](https://travis-ci.org/babajka/babajka-markup.svg?branch=master)](https://travis-ci.org/babajka/babajka-markup)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/wir-by/wir-by-design)

Styles &amp; Markup for Babajka team project

## How to use

- run `npm install babajka-markup`
- import files from your `node_modules`:
  - `../node_modules/babajka-markup/dist/styles/bundle.min.css` - all our styles in one file
  - `../node_modules/babajka-markup/dist/styles/assets.min.css` - all 3rd-party libs in one file
  - `../node_modules/babajka-markup/dist/fonts`

## Development

### proper commit naming

We have autopublishing to npm registry and package autoversioning set up. In order to introduce a new package version one should follow the conventions:

- `fix(<scope>): <subject>` - increases **patch** version: 1.0.0 -> 1.0.1
- `style(<scope>): <subject>` - increases **patch** version: 1.0.0 -> 1.0.1
- `feat(<scope>): <subject>` - increases **minor** version: 1.0.0 -> 1.1.0
- `major(<scope>): <subject>` - increases **major** version: 1.0.0 -> 2.0.0

Autopushing is performed by Travis and only triggered when pushing (single commit or PR) into `master` branch.

All commit messages checked with [commitlint](https://github.com/marionebl/commitlint). Feel free to add new `scope`'s and `type`'s to [`.commitlintrc.js`](https://github.com/babajka/babajka-markup/blob/master/.commitlintrc.js)

### scripts

- `npm run build` for build css bundles and html templates, after that you will have:
  _ `dist/styles/bundle.css` - all our styles in one file
  _ `dist/styles/bundle.min.css` - minified production build
  _ `dist/styles/assets.min.css` - all 3dparty libs in one file
  _ `dist/fonts/` - FontAwesome fonts \* `dist/images` - images

- `npm start` or `npm run watch`:

  - build all static
  - start dev server on [`localhost:3001`](http://localhost:3001)
  - watch for changes, recompile styles and templates and reload page

- `npm run storybook` for start development playground / styleguide
- `npm run storybook:build` - check out [deployed version](https://babajka.github.io/babajka-markup/storybook)

> enjoy coding!

- `npm run lint` to check `sass` & `html` codestyle
- `npm run deploy` for hosting templates under [`github-pages`](https://babajka.github.io/babajka-markup/)
- `npm run release` for publish new version of markups (automatically run `prerelease` & `postrelease` scripts)
