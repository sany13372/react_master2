import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentCard } from './CommentCard';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';

export default {
  title: 'entities/Comments/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comments: {
    id: '1',
    text: 'comment 1',
    user: {
      id: '1',
      username: 'name user',
    },
  },
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
  comments: {
    id: '1',
    text: 'comment 1',
    user: {
      id: '1',
      username: 'name user',
    },
  },
  isLoading: true,
};
