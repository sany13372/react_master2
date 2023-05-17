import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../../../Button/Button';

import { Dropdown } from './Dropdown';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ padding: 100 }}><Story /></div>,
  ],
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  trigger: <Button>Open</Button>,
  items: [
    {
      content: 'first',
    },
    {
      content: 'second',
    },
    {
      content: 'third',
    },
  ],
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const topLeft = Template.bind({});
topLeft.args = {
  trigger: <Button>Open</Button>,
  items: [
    {
      content: 'first',
    },
    {
      content: 'second',
    },
    {
      content: 'third',
    }],
  direction: 'top left',

};
topLeft.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const topRight = Template.bind({});
topRight.args = {
  trigger: <Button>Open</Button>,
  items: [
    {
      content: 'first',
    },
    {
      content: 'second',
    },
    {
      content: 'third',
    }],
  direction: 'top right',

};
topRight.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const bottomLeft = Template.bind({});
bottomLeft.args = {
  trigger: <Button>Open</Button>,
  items: [
    {
      content: 'first',
    },
    {
      content: 'second',
    },
    {
      content: 'third',
    }],
  direction: 'bottom left',

};
bottomLeft.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const bottomRight = Template.bind({});
bottomRight.args = {
  trigger: <Button>Open</Button>,
  items: [
    {
      content: 'first',
    },
    {
      content: 'second',
    },
    {
      content: 'third',
    }],
  direction: 'bottom right',

};
bottomRight.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];
