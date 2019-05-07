import { storiesOf } from '@storybook/html';
import { text, array, object } from '@storybook/addon-knobs';
import { withViewport } from '@storybook/addon-viewport';

import renderMarginImage from './marginImage.ejs';
import renderMarginNote from './marginNote.ejs';
import renderMarginYear from './marginYear.ejs';
import renderMarginList from './marginList.ejs';
import renderMarginTable from './marginTable.ejs';
import './marginElements.scss';

const wrapper = content => `<div style="margin: 10px">${content}</div>`;

const marginElements = storiesOf('Margin Elements', module).addDecorator(withViewport());
marginElements.add('Margin Image', ({ parameters: { defaultData } }) => {
  const title = text('title', 'Фотакартка ў тэкце');
  const subtitle = text(
    'subtitle',
    'Старонка Статута 1588 года (трэба пазначаць крыніцу, адкуль узялі)'
  );

  const data = {
    ...defaultData,
    title,
    subtitle,
  };

  return wrapper(renderMarginImage(data));
});

marginElements.add('Margin Note', ({ parameters: { defaultData } }) => {
  const title = text('title', 'Зноска');
  const noteText = text(
    'noteText',
    'Тое, што ў кнігах робіцца ў нізе старонкі, у нас будзе на палях каля абзацу, да якога датычыцца.'
  );

  const data = {
    ...defaultData,
    title,
    noteText,
  };

  return wrapper(renderMarginNote(data));
});

marginElements.add('Margin Year', ({ parameters: { defaultData } }) => {
  const year = text('year', '1722');
  const yearText = text(
    'yearText',
    'год выхаду ў свет апошняй друкаванай кнігі на старабеларускай мове'
  );

  const data = {
    ...defaultData,
    year,
    yearText,
  };

  return wrapper(renderMarginYear(data));
});

marginElements.add('Margin List', ({ parameters: { defaultData } }) => {
  const title = text('title', 'Спіс не ў тэксце, а на палях');
  const listElements = array('listElements', [
    'Першы пункт. Вялікі. У некалькі радкоў.',
    'Другі пункт.',
    'Трэці.',
  ]);

  const data = {
    ...defaultData,
    title,
    listElements,
  };

  return wrapper(renderMarginList(data));
});

// TODO(andemerie): finish margin table
marginElements.add('Margin Table', ({ parameters: { defaultData } }) => {
  const tableHeaders = array('tableHeaders', ['У ВКЛ', 'Зараз']);
  const tableRows = object('tableRows', [
    ['жадный', 'ніякі, ніхто'],
    ['место', 'горад'],
    ['мешкати', 'жыць, знаходзіцца'],
    ['панство', 'дзяржава'],
    ['сведетство', 'сведчанне, паведамленне'],
    ['быдло', 'свойская жывёла'],
    ['валька', 'бой, бітва'],
    ['владза', 'улада, сіла'],
    ['владца', 'уладар'],
    ['державца', 'ўладальнік, адміністратар'],
    ['поборца', 'чалавек, які збірае падаткі'],
    ['выдерца', 'асоба, якая забірае што-небудзь беззаконна, гвалтам'],
    ['бадати', 'распытваць, дапытваць'],
    ['жакгель', 'ветразь'],
    ['крайчый', 'прыдворны, які на ўрачыстых абедах разразаў ежу, што падавалася вялікаму князю'],
    ['барзо', 'вельмі'],
    ['дейца', 'выканаўца, вытворца дзеяння'],
    ['свепетъ', 'гняздо лясных пчол'],
  ]);

  const data = {
    ...defaultData,
    tableHeaders,
    tableRows,
  };

  return wrapper(renderMarginTable(data));
});
