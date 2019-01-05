#!/usr/bin/env bash

# setup env
export BABAJKA_PREFIX=babajka-markup
export STORYBOOK_IMAGE_PATH=/babajka-markup/static

# build pages & storybook
npm run build

# apply index page fix
cp dist/static/index.html dist/index.html

# deploy on https://babajka.github.io/babajka-markup
gh-pages -d dist

# clean up
rm dist/index.html
