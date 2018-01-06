# babajka-markup
[![npm version](https://badge.fury.io/js/babajka-markup.svg)](https://badge.fury.io/js/babajka-markup)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/001d83b6ff434a2fb5ce86517b7955b4)](https://www.codacy.com/app/babajka/babajka-markup?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=babajka/babajka-markup&amp;utm_campaign=Badge_Grade)
[![Dependency Status](https://www.versioneye.com/user/projects/595ac98d0fb24f006c059d06/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/595ac98d0fb24f006c059d06)
[![Build Status](https://travis-ci.org/babajka/babajka-markup.svg?branch=master)](https://travis-ci.org/babajka/babajka-markup)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


Styles &amp; Markup for babajka team project

## How to use

* run `npm install babajka-markup`
* import files from your `node_modules`:
    * `../node_modules/babajka-markup/dist/styles/bundle.min.css` - all our styles in one file
    * `../node_modules/babajka-markup/dist/styles/assets.min.css` - all 3rd-party libs in one file
    * `../node_modules/babajka-markup/dist/fonts`

## Development

### scripts

* `npm run build` for build css bundles and html templates, after that you will have:
	* `dist/styles/bundle.css` - all our styles in one file
	* `dist/styles/bundle.min.css` - minified production build
	* `dist/styles/assets.min.css` - all 3dparty libs in one file
	* `dist/fonts/` - FontAwesome fonts
	* `dist/images` - images

* `npm start` or `npm run watch`:
    * build all static
    * start dev server on [`localhost:3001`](http://localhost:3001)
    * watch for changes, recompile styles and templates and reload page

> enjoy coding!

* `npm run lint` for check `sass` & `html` codestyle
* `npm run deploy` for hosting templates under [`github-pages`](https://babajka.github.io/babajka-markup/)
* `npm run release` for publish new version of markups (automatically run `prerelease` & `postrelease` scripts)
