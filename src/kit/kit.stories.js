import { storiesOf } from '@storybook/html';
import { text, boolean } from '@storybook/addon-knobs';

import renderInput from './input/input.ejs';
import renderLink from './link/link.ejs';

import './stories.scss';
import './input/input.scss';
import './link/link.scss';

const kit = storiesOf('KIT', module);
kit.add('Input', ({ parameters: { defaultData } }) => {
  const disabled = boolean('is disabled', false);
  const loading = boolean('is loading', false);
  const leftIcon = text('left icon', 'search');
  const rightIcon = text('right icon', 'arrow-right');

  const data = {
    ...defaultData,
    disabled,
    leftIcon,
    rightIcon,
    loading,
  };

  return `<div class="container">${renderInput(data)}</div>`;
});

kit.add('Link', ({ parameters: { defaultData } }) => {
  const disabled = boolean('is disabled', false);
  const linkText = text('text', 'wir.team@gmail.com');
  const rightIcon = text('right icon', 'user');
  const isDarkTheme = boolean('is dark theme', false);

  const data = {
    ...defaultData,
    disabled,
    text: linkText,
    rightIcon,
    isDarkTheme,
  };

  return `<div class="container link ${isDarkTheme && 'theme-dark'}">${renderLink(data)}</div>`;
});
