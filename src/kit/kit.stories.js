import { storiesOf } from '@storybook/html';
import { text, boolean } from '@storybook/addon-knobs';

import renderInput from './input/input.ejs';
import './input/input.scss';

const kit = storiesOf('KIT', module);
kit.add('Input', ({ parameters: { defaultData } }) => {
  const isDisabled = boolean('is disabled', false);
  const leftIcon = text('left icon', 'search');
  const rightIcon = text('right icon', 'arrow-right');

  const data = {
    ...defaultData,
    isDisabled,
    leftIcon,
    rightIcon,
  };

  return `<div style="width: 250px; margin: 30px">${renderInput(data)}</div>`;
});
