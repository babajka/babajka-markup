import { configure, addDecorator, addParameters } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';

import './styles.scss';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withKnobs);
const dec = storyFn => storyFn('keklol');
addDecorator(dec);
addParameters({
  defaultData: {
    imagesPath: `${process.env.STORYBOOK_IMAGE_PATH || ''}/images`,
  },
});

configure(loadStories, module);
