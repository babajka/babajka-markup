import { storiesOf } from '@storybook/html';
import { text, array } from '@storybook/addon-knobs';

import render from './sidebar.ejs';
import './sidebar.scss';
import '../input/input.scss';

import { TOPICS, PEOPLE, TIMES } from './staticData';

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
