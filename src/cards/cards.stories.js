import { storiesOf } from '@storybook/html';
import { select, color, boolean, text, number } from '@storybook/addon-knobs';
import { withViewport } from '@storybook/addon-viewport';

import renderArticle from './article.ejs';
import './article.scss';
import renderCollection from './collection.ejs';
import './collection.scss';
import renderVideo from './video.ejs';
import './video.scss';

const wrapper = content => `<div style="margin: 10px">${content}</div>`;

const cards = storiesOf('Cards', module).addDecorator(withViewport());
cards.add('Article', ({ parameters: { defaultData } }) => {
  const size = select('size', ['xxl', 'xl', 'l', 'm', 'square-m', 'square-s'], 'xxl');
  const backgroundColor = color('backgroundColor', '#1a2e48');
  const isDarkTheme = boolean('isDarkTheme', false);
  const title = text('title', 'Як прыгатаваць мову ВКЛ?');
  const author = text('author', 'Марыя Бадзей, Марына Анісімава');
  const description = text(
    'description',
    'Мноства баталій, якія з зайздроснай рэгулярнасцю разгараюцца вакол беларускай мовы, тычацца не толькі яе сучаснага стану. Мовазнаўцы і гісторыкі і па сёння не могуць пагадзіцца наконт таго, на якую мову Скарына пераклаў Біблію, што можна лічыць моваю беларускай і з якіх часоў варта адсочваць яе развіццё. Паспрабуем прыгледзецца да мовы Вялікага Княства Літоўскага'
  );

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
  const size = select('size', ['xxl', 'xl', 'l', 'm', 'square-m', 'square-s'], 'xxl');
  const backgroundColor = color('backgroundColor', '#F6D39D');
  const isDarkTheme = boolean('isDarkTheme', true);
  const partNumber = number('partNumber', 1);
  const collectionName = text('seriesName', 'Міцкевіч: геаграфія паэта');
  const title = text('title', 'Літва! Ты, як здароўе ў нас, мая Айчына!');
  const author = text('author', 'Марыя Бадзей');

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
  const size = select('size', ['xxl', 'xl', 'l', 'm', 'square-m', 'square-s'], 'xxl');
  const isDarkTheme = boolean('isDarkTheme', false);
  const title = text('title', 'Джэймс Джойс');
  const author = text('author', 'Наталля Ламека');

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
  const size = select('size', ['xxl', 'xl', 'l', 'm', 'square-m', 'square-s'], 'xxl');
  const backgroundColor = color('backgroundColor', '#D5D4D9');
  const isDarkTheme = boolean('isDarkTheme', true);
  const isBrandArticle = boolean('isBrandArticle', true);
  const title = text('title', 'Вітальд Бялыніцкі-Біруля');
  const author = text('author', 'А.П.Харак');
  const description = text(
    'description',
    'Мноства баталій, якія з зайздроснай рэгулярнасцю разгараюцца вакол беларускай мовы, тычацца не толькі яе сучаснага стану. Мовазнаўцы і гісторыкі і па сёння не могуць пагадзіцца наконт таго, на якую мову Скарына пераклаў Біблію, што можна лічыць моваю беларускай і з якіх часоў варта адсочваць яе развіццё.'
  );

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
