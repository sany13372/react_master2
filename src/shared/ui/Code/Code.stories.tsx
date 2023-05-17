import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Code } from './Code';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  text: 'export default {\n'
    + '    title: \'shared/Code\',\n'
    + '    component: Code,\n'
    + '    argTypes: {\n'
    + '        backgroundColor: { control: \'color\' },\n'
    + '    },\n'
    + '} as ComponentMeta<typeof Code>;\n'
    + '\n'
    + 'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n'
    + '\n'
    + 'export const Normal = Template.bind({});',
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];
