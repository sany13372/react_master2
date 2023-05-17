import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';

export default {
  title: 'Shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputLight = Template.bind({});
InputLight.args = {
  value: 'test text',
};

export const InputLightEmpty = Template.bind({});
InputLightEmpty.args = {
  placeholder: 'Input text',
};

export const InputDark = Template.bind({});
InputDark.args = {
  value: 'test text',
};
InputDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InputDarkEmpty = Template.bind({});
InputDarkEmpty.args = {
  placeholder: 'Input text',
};
InputDarkEmpty.decorators = [ThemeDecorator(Theme.DARK)];
