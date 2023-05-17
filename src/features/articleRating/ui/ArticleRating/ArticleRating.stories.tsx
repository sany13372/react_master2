import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import ArticleRating from './ArticleRating';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';

export default {
  title: 'features/Article/ArticleRating',
  component: ArticleRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  articleId: '1',
};
Normal.parameters = {
  mockData: [
    {
      url: `${__API}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [
        { rate: 4 },
      ],
    },
  ],
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  user: {
    authData: { id: '1' },
  },
})];

export const EmtyRate = Template.bind({});
EmtyRate.args = {
  articleId: '1',
};
EmtyRate.parameters = {
  mockData: [
    {
      url: `${__API}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [],
    },
  ],
};
EmtyRate.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  user: {
    authData: { id: '1' },
  },
})];
