import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProfilePage from './ProfilePage';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  profile: {
    form: {
      username: 'admin',
      age: 22,
      country: Country.Russia,
      lastname: 'lastname',
      first: 'asd',
      city: 'asf',
      currency: Currency.RUB,
    },
  },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      username: 'admin',
      age: 22,
      country: Country.Russia,
      lastname: 'lastname',
      first: 'asd',
      city: 'asf',
      currency: Currency.RUB,
    },
  },
})];
