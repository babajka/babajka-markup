import { storiesOf } from '@storybook/html';
import { text, boolean } from '@storybook/addon-knobs';

import render from './tile.ejs';
import './tile.scss';

const tile = storiesOf('Tile', module);
tile.add('playground', ({ parameters: { defaultData } }) => {
  const isUnpublished = boolean('unpublished', true);
  const isDraft = boolean('draft', true);
  const isVideoArticle = boolean('video article', true);
  const authorVar = text('author', 'Змітр Корнеў');
  const authorPhotoVar = text('author image', 'mock/vajc.jpg');
  const photoClassVar = text('image class', 'is-16by9');
  const photoVar = text('preview image', 'mock/photo2.jpg');
  const titleVar = text('title', 'Крама "як з крамы"');
  const subtitleVar = text(
    'subtitle',
    `Новы альбом: як, дзе і для каго.
    Учора Крама прадставіла новы альбом, а мы вам пра яго распавядзем.
    Назва новага альбома - "Крама". Яго...`
  );
  const specialHeadingNameVar = text('brand', 'Мінск');
  const specialHeadingPhotoVar = text('brand image', 'references/15_icon.png');
  const specialHeadingHandmadeVar = text('brand image text', '');

  const data = {
    ...defaultData,
    authorVar,
    authorPhotoVar,
    isUnpublished,
    photoClassVar,
    photoVar,
    titleVar,
    subtitleVar,
    specialHeadingNameVar,
    specialHeadingPhotoVar,
    specialHeadingHandmadeVar,
    isVideoArticle,
    isDraft,
  };

  return `<div style="width: 500px">${render(data)}</div>`;
});
