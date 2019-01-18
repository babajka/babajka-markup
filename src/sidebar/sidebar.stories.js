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

const PEOPLE = [
  'Янка Купала',
  'Уладзімір Караткевіч',
  'Адам Міцкевіч',
  'Якуб Колас',
  'Ян Баршчэўскі',
];

const TIMES = ['1956 год', 'сення', 'у будучыні', '1863 год', 'XX стагоддзе'];

/*
TODO: 
1. local problem with Ubuntu font
2. Create basic structure of variables/ fonts for src
3. what is the color of sidebar background?
4. divider width
*/

const tile = storiesOf('src/Sidebar', module);
tile.add('playground', ({ parameters: { defaultData } }) => {
  const russianLang = text('russian lang text', 'по-русски');
  const englishLang = text('english lang text', 'in english');

  const topicsTitle = text('topics title', 'Тэмы');
  const topics = array('topics', TOPICS, ',');

  const peopleTitle = text('people title', 'асноўныя персаналіі');
  const people = array('people', PEOPLE, ',');

  const timeTitle = text('time title', 'асноўныя часы');
  const times = array('times', TIMES, ',');

  const data = {
    ...defaultData,
    langs: [russianLang, englishLang],
    topicsTitle,
    topics,
    peopleTitle,
    people,
    timeTitle,
    times,
  };

  return `<div style="width: 500px">${render(data)}</div>`;
});
