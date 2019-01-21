import { storiesOf } from '@storybook/html';
import { text, boolean } from '@storybook/addon-knobs';

import renderInput from './input/input.ejs';
import './input/input.scss';

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

  return `<div style="width: 250px; margin: 30px">${renderInput(data)}</div>`;
});
