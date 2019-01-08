import { storiesOf } from '@storybook/html';
import { text, boolean, select } from '@storybook/addon-knobs';

import renderSelect from './select__selected.ejs';
import renderSelectAuthors from './select__authors.ejs';
import renderAuthor from './author.ejs';

import { withIncludes } from '../../../.storybook/utils';

import './select.scss';
import './author.scss';

const render = withIncludes({ './author.ejs': renderAuthor });
const wrapper = content => `<div style="margin: 30px">${content}</div>`;

const selectStories = storiesOf('Select', module);
selectStories.add('author', ({ parameters: { defaultData } }) => {
  const name = text('name', 'Lavon Volski');
  const photo = text('photo', 'mock/volski.jpg');
  const data = {
    ...defaultData,
    name,
    photo,
  };
  return wrapper(renderAuthor(data));
});
selectStories.add('default', ({ parameters: { defaultData } }) => {
  const size = select('size', ['xs', 's', 'm', 'l'], 'xs');
  const opened = boolean('opened', false);
  const data = {
    ...defaultData,
    size,
    opened,
  };
  return wrapper(renderSelect(data));
});
selectStories.add('with author', ({ parameters: { defaultData } }) =>
  wrapper(render(renderSelectAuthors, defaultData))
);
