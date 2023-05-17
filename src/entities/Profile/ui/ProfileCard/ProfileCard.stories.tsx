import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ProfileCard } from './ProfileCard';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/test/storybook.png';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Empty = Template.bind({});
Empty.args = {};

export const DarkEmpty = Template.bind({});
DarkEmpty.args = {};
DarkEmpty.decorators = [ThemeDecorator(Theme.DARK)];

export const WithData = Template.bind({});
WithData.args = {
  data: {
    id: '1',
    username: 'admin',
    age: 22,
    country: Country.Russia,
    lastname: 'lastname',
    first: 'asd',
    city: 'asf',
    currency: Currency.RUB,
    avatar,
  },
};

export const DarkWithData = Template.bind({});
DarkWithData.args = {
  data: {
    id: '1',
    username: 'admin',
    age: 22,
    country: Country.Russia,
    lastname: 'lastname',
    first: 'asd',
    city: 'asf',
    currency: Currency.RUB,
    avatar,
  },
};
DarkWithData.decorators = [ThemeDecorator(Theme.DARK)];

export const withError = Template.bind({});
withError.args = {
  error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
