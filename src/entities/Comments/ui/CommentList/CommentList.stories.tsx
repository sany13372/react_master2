import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentList } from './CommentList';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';

export default {
  title: 'entities/Comments/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});

Normal.args = {
  comments: [
    {
      id: '1',
      text: 'comment 1',
      user: {
        id: '1',
        username: 'name user',
      },
    },
    {
      id: '2',
      text: 'comment 2',
      user: {
        id: '1',
        username: 'name user',
      },
    },
  ],
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
