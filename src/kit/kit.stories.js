import { storiesOf } from '@storybook/html';
import { text, boolean } from '@storybook/addon-knobs';

import renderInput from './input/input.ejs';
import renderLink from './link/link.ejs';
import renderSocialButtons from './social-buttons/social-buttons.ejs';
import renderButtonGroup from './button-group/button-group.ejs';

import './stories.scss';
import './input/input.scss';
import './link/link.scss';
import './social-buttons/social-buttons.scss';
import './button-group/button-group.scss';

const kit = storiesOf('UI Kit', module);
kit.add('Input', ({ parameters: { defaultData } }) => {
  const disabled = boolean('is disabled', false);
  const loading = boolean('is loading', false);
  const leftIcon = text('left icon', 'fas fa-search');
  const rightIcon = text('right icon', 'fas fa-arrow-right');

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
  const rightIcon = text('right icon', 'fas fa-user');
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

kit.add(
  'Social buttons',
  ({ parameters: { defaultData } }) =>
    `<div class="container">${renderSocialButtons(defaultData)}</div>`
);

kit.add(
  'ButtonGroup',
  ({ parameters: { defaultData } }) =>
    `<div class="container button-group">${renderButtonGroup(defaultData)}</div>`
);
