import { storiesOf } from '@storybook/html';
import { boolean } from '@storybook/addon-knobs';

import renderInput from './input/input.ejs';
import './input/input.scss';

const kit = storiesOf('KIT', module);
kit.add('Input', ({ parameters: { defaultData } }) => {
  const isDisabled = boolean('is disabled', false);
  const hasLeftIcon = boolean('has left icon', true);
  const hasRightIcon = boolean('has right icon', false);

  const data = {
    ...defaultData,
    isDisabled,
    hasLeftIcon,
    hasRightIcon,
  };

  return `<div style="width: 250px; margin: 30px">${renderInput(data)}</div>`;
});
