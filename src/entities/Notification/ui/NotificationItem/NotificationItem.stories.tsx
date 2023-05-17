import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NotificationItem } from './NotificationItem';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';

export default {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  item: {
    title: 'name', description: 'description', id: '1', userId: '1',
  },
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const NormalLink = Template.bind({});
NormalLink.args = {
  item: {
    title: 'name', description: 'description', id: '1', userId: '1', href: '23423',
  },
};
NormalLink.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];
