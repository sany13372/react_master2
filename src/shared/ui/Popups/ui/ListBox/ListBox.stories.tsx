import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListBox } from './ListBox';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ padding: 100 }}><Story /></div>,
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  items: [
    { value: '1', content: 'Durward Reynolds' },
    { value: '2', content: 'Kenton Towne' },
    { value: '3', content: 'Therese Wunsch' },
    { value: '4', content: 'Benedict Kessler' },
    { value: '5', content: 'Katelyn Rohan' },
  ],
  label: 'label',
  value: 'value',

};
Normal.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const topLeft = Template.bind({});
topLeft.args = {
  items: [
    { value: '1', content: 'Durward Reynolds' },
    { value: '2', content: 'Kenton Towne' },
    { value: '3', content: 'Therese Wunsch' },
    { value: '4', content: 'Benedict Kessler' },
    { value: '5', content: 'Katelyn Rohan' },
  ],
  label: 'label',
  value: 'value',
  direction: 'top left',

};
topLeft.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const topRight = Template.bind({});
topRight.args = {
  items: [
    { value: '1', content: 'Durward Reynolds' },
    { value: '2', content: 'Kenton Towne' },
    { value: '3', content: 'Therese Wunsch' },
    { value: '4', content: 'Benedict Kessler' },
    { value: '5', content: 'Katelyn Rohan' },
  ],
  label: 'label',
  value: 'value',
  direction: 'top right',

};
topRight.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const bottomLeft = Template.bind({});
bottomLeft.args = {
  items: [
    { value: '1', content: 'Durward Reynolds' },
    { value: '2', content: 'Kenton Towne' },
    { value: '3', content: 'Therese Wunsch' },
    { value: '4', content: 'Benedict Kessler' },
    { value: '5', content: 'Katelyn Rohan' },
  ],
  label: 'label',
  value: 'value',
  direction: 'bottom left',

};
bottomLeft.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const bottomRight = Template.bind({});
bottomRight.args = {
  items: [
    { value: '1', content: 'Durward Reynolds' },
    { value: '2', content: 'Kenton Towne' },
    { value: '3', content: 'Therese Wunsch' },
    { value: '4', content: 'Benedict Kessler' },
    { value: '5', content: 'Katelyn Rohan' },
  ],
  label: 'label',
  value: 'value',
  direction: 'bottom right',

};
bottomRight.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];
