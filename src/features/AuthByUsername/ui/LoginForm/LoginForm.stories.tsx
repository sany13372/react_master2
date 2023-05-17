import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoginForm from './LoginForm';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';

export default {
  title: 'Features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.decorators = [StoreDecorator({
  LoginForm: { username: 'admin', password: '123' },
})];

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    LoginForm: { username: 'admin', password: '123' },
  }),
];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [StoreDecorator({
  LoginForm: { username: '123', password: 'asd', error: 'ERROR' },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
  LoginForm: { isLoading: true },
})];
