import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text, TextSize, TextTheme } from './Text';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';

export default {
  title: 'Shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Title = Template.bind({});
Title.args = {
  title: 'title',
};

export const Textonly = Template.bind({});
Textonly.args = {
  text: 'text text text',
};

export const TitleText = Template.bind({});
TitleText.args = {
  title: 'title',
  text: 'text text text',
};

export const TitleDark = Template.bind({});
TitleDark.args = {
  title: 'title',
};
TitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextOnlyDark = Template.bind({});
TextOnlyDark.args = {
  text: 'text text text',
};
TextOnlyDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TitleTextDark = Template.bind({});
TitleTextDark.args = {
  title: 'title',
  text: 'text text text',
};
TitleTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TitleTextError = Template.bind({});
TitleTextError.args = {
  title: 'title',
  text: 'text text text',
  theme: TextTheme.ERROR,
};

export const TitleTextErrorDark = Template.bind({});
TitleTextErrorDark.args = {
  title: 'title',
  text: 'text text text',
  theme: TextTheme.ERROR,
};
TitleTextErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
  size: TextSize.L,
};
