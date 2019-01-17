import { storiesOf } from '@storybook/html';
import { text, array } from '@storybook/addon-knobs';

import render from './sidebar.ejs';
import './sidebar.scss';

const TOPICS = [
  'архітэктура',
  'гісторыя',
  'кіно',
  'лінгвістыка',
  'літаратура',
  'мастацтва',
  'міфалогія',
  'музыка',
  'тэатр',
  'філасофія',
];

const tile = storiesOf('src/Sidebar', module);
tile.add('playground', ({ parameters: { defaultData } }) => {
  const russianLang = text('russian lang text', 'по-русски');
  const englishLang = text('english lang text', 'in english');

  const topicsTitle = text('topics title', 'Тэмы');
  const topics = array('topics', TOPICS, ',');

  const data = {
    ...defaultData,
    langs: [russianLang, englishLang],
    topicsTitle,
    topics,
  };

  return `<div style="width: 500px">${render(data)}</div>`;
});
