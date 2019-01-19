import { storiesOf } from '@storybook/html';
import { select, color, boolean, text } from '@storybook/addon-knobs';
import { withViewport } from '@storybook/addon-viewport';

import renderArticle from './article.ejs';
import './article.scss';

const wrapper = content => `<div style="margin: 10px">${content}</div>`;

const cards = storiesOf('Cards', module).addDecorator(withViewport());
cards.add('Article', ({ parameters: { defaultData } }) => {
  const size = select('size', ['xxl', 'xl', 'l', 'm', 'square-m', 'square-s', 's', 'xs'], 'xxl');
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
