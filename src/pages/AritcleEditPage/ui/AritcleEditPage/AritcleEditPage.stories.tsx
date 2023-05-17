import { ComponentStory, ComponentMeta } from '@storybook/react';

import AritcleEditPage from './AritcleEditPage';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';

export default {
  title: 'Pages/AritcleEditPage',
  component: AritcleEditPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AritcleEditPage>;

const Template: ComponentStory<typeof AritcleEditPage> = (args) => <AritcleEditPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];
