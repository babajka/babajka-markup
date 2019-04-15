import { storiesOf } from '@storybook/html';
import { select, color, boolean, text, number } from '@storybook/addon-knobs';
import { withViewport } from '@storybook/addon-viewport';

import renderArticle from './article.ejs';
import './article.scss';
import renderCollection from './collection.ejs';
import './collection.scss';
import renderVideo from './video.ejs';
import './video.scss';
import renderPerson from './person.ejs';
import './person.scss';
import renderLocation from './location.ejs';
import './location.scss';

import { article, collectionArticle, video, brandArticle, person, location } from './defaultData';

const wrapper = content => `<div style="margin: 10px">${content}</div>`;

const cards = storiesOf('Cards', module).addDecorator(withViewport());
cards.add('Article', ({ parameters: { defaultData } }) => {
  const size = select('size', ['xxl', 'xl', 'l', 'm', 'square-m', 'square-s'], article.size);
  const backgroundColor = color('backgroundColor', article.backgroundColor);
  const isDarkTheme = boolean('isDarkTheme', article.isDarkTheme);
  const title = text('title', article.title);
  const author = text('author', article.author);
  const description = text('description', article.description);

  const data = {
    ...defaultData,
    size,
    backgroundColor,
    isDarkTheme,
    title,
    author,
    description,
  };

  return wrapper(renderArticle(data));
});

cards.add('Collection Article', ({ parameters: { defaultData } }) => {
  const size = select(
    'size',
    ['xxl', 'xl', 'l', 'm', 'square-m', 'square-s'],
    collectionArticle.size
  );
  const backgroundColor = color('backgroundColor', collectionArticle.backgroundColor);
  const isDarkTheme = boolean('isDarkTheme', collectionArticle.isDarkTheme);
  const partNumber = number('partNumber', collectionArticle.partNumber);
  const collectionName = text('collectionName', collectionArticle.collectionName);
  const title = text('title', collectionArticle.title);
  const author = text('author', collectionArticle.author);

  const data = {
    ...defaultData,
    size,
    backgroundColor,
    isDarkTheme,
    partNumber,
    collectionName,
    title,
    author,
  };

  return wrapper(renderCollection(data));
});

cards.add('Video Article', ({ parameters: { defaultData } }) => {
  const size = select('size', ['xxl', 'xl', 'l', 'm', 'square-m', 'square-s'], video.size);
  const isDarkTheme = boolean('isDarkTheme', video.isDarkTheme);
  const title = text('title', video.title);
  const author = text('author', video.author);

  const data = {
    ...defaultData,
    size,
    isDarkTheme,
    title,
    author,
  };

  return wrapper(renderVideo(data));
});

cards.add('Brand Article', ({ parameters: { defaultData } }) => {
  const size = select('size', ['xxl', 'xl', 'l', 'm', 'square-m', 'square-s'], brandArticle.size);
  const backgroundColor = color('backgroundColor', brandArticle.backgroundColor);
  const isDarkTheme = boolean('isDarkTheme', brandArticle.isDarkTheme);
  const isBrandArticle = boolean('isBrandArticle', brandArticle.isBrandArticle);
  const title = text('title', brandArticle.title);
  const author = text('author', brandArticle.author);
  const description = text('description', brandArticle.description);

  const data = {
    ...defaultData,
    size,
    backgroundColor,
    isDarkTheme,
    isBrandArticle,
    title,
    author,
    description,
  };

  return wrapper(renderArticle(data));
});

cards.add('Person Tag', ({ parameters: { defaultData } }) => {
  const size = select('size', ['l', 'square-m', 'square-s', 's', 'xs'], person.size);
  const backgroundColor = color('backgroundColor', person.backgroundColor);
  const isDarkTheme = boolean('isDarkTheme', person.isDarkTheme);
  const years = text('years', person.years);
  const title = text('title', person.title);
  const description = text('description', person.description);

  const data = {
    ...defaultData,
    size,
    backgroundColor,
    isDarkTheme,
    years,
    title,
    description,
  };

  return wrapper(renderPerson(data));
});

cards.add(
  'Location Tag',
  ({ parameters: { defaultData } }) => {
    const size = select('size', ['l', 'square-m', 'square-s', 's', 'xs'], location.size);
    const isDarkTheme = boolean('isDarkTheme', location.isDarkTheme);
    const title = text('title', location.title);

    const data = {
      ...defaultData,
      size,
      isDarkTheme,
      title,
    };

    return wrapper(renderLocation(data));
  },
  {
    knobs: {
      escapeHTML: false,
    },
  }
);
