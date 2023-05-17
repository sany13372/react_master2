import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import { NotificationList } from './NotificationList';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

const items = [
  {
    title: 'name', description: 'description', id: '1', userId: '1',
  },
  {
    title: 'name', description: 'description', id: '2', userId: '1',
  },
  {
    title: 'name', description: 'description', id: '3', userId: '1', href: '23423',
  },
  {
    title: 'name', description: 'description', id: '4', userId: '1', href: '23423',
  },
  {
    title: 'name', description: 'description', id: '5', userId: '1', href: '23423',
  },
  {
    title: 'name', description: 'description', id: '6', userId: '1', href: '23423',
  },
];
export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
  mockData: [
    {
      url: `${__API}/notifications`,
      method: 'GET',
      status: 200,
      response: items,
    },
  ],
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];
