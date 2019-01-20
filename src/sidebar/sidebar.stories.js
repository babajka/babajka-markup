import { storiesOf } from '@storybook/html';
import { text, array } from '@storybook/addon-knobs';

import renderSidebar from './sidebar.ejs';
import renderInput from '../kit/input/input.ejs';

import { withIncludes } from '../../.storybook/utils';

import './sidebar.scss';
import '../kit/input/input.scss';

import { TOPICS, PERSONS, TIMES, LOCATIONS, PARTNERS, AUTHORS } from './staticData';

const render = withIncludes({ '../kit/input/input.ejs': renderInput });

const sidebar = storiesOf('Sidebar', module);
sidebar.add('playground', ({ parameters: { defaultData } }) => {
  const russianLang = text('russian lang text', 'по-русски');
  const englishLang = text('english lang text', 'in english');

  const topics = array('topics', TOPICS);
  const persons = array('persons', PERSONS);
  const times = array('times', TIMES);
  const locations = array('locations', LOCATIONS);
  const partners = array('partners', PARTNERS);
  const authors = array('authors', AUTHORS);

  const data = {
    ...defaultData,
    langs: [russianLang, englishLang],
    topics,
    persons,
    times,
    locations,
    partners,
    authors,
    leftIcon: 'search',
  };

  return `<div style="width: 500px">${render(renderSidebar, data)}</div>`;
});
