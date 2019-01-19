import { storiesOf } from '@storybook/html';
import { text, array } from '@storybook/addon-knobs';

import render from './sidebar.ejs';
import './sidebar.scss';
import '../input/input.scss';

import { TOPICS, PEOPLE, TIMES, LOCATIONS, PARTNERS, AUTHORS } from './staticData';

const tile = storiesOf('src/Sidebar', module);
tile.add('playground', ({ parameters: { defaultData } }) => {
  const russianLang = text('russian lang text', 'по-русски');
  const englishLang = text('english lang text', 'in english');

  const topics = array('topics', TOPICS);
  const people = array('people', PEOPLE);
  const times = array('times', TIMES);
  const locations = array('locations', LOCATIONS);
  const partners = array('partners', PARTNERS);
  const authors = array('authors', AUTHORS);

  const data = {
    ...defaultData,
    langs: [russianLang, englishLang],
    topics,
    people,
    times,
    locations,
    partners,
    authors,
  };

  return `<div style="width: 500px">${render(data)}</div>`;
});
