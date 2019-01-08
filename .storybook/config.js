import { configure, addDecorator, addParameters } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import './styles.scss';

// automatically import all files ending in *.stories.js
const reqSrc = require.context('../src', true, /.stories.js$/);
const reqLegacy = require.context('../legacy', true, /.stories.js$/);
function loadStories() {
  reqSrc.keys().forEach(filename => reqSrc(filename));
  reqLegacy.keys().forEach(filename => reqLegacy(filename));
}

addDecorator(withKnobs);
addParameters({
  defaultData: {
    imagesPath: `${process.env.STORYBOOK_IMAGE_PATH || ''}/images`,
  },
});

configure(loadStories, module);
