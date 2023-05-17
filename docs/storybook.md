## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook`

Пример:

```typescript jsx
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonSize, ButtonVariant } from './Button';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/Theme';

export default {
  title: 'Shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ButtonVariant.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text',
  theme: ButtonVariant.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: ButtonVariant.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: ButtonVariant.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineRed = Template.bind({});
OutlineRed.args = {
  children: 'Text',
  theme: ButtonVariant.OUTLINE_RED,
};

export const OutlineRedDark = Template.bind({});
OutlineRedDark.args = {
  children: 'Text',
  theme: ButtonVariant.OUTLINE_RED,
};
OutlineRedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
  children: 'Text',
  theme: ButtonVariant.BACKGROUND,
};
export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonVariant.BACKGROUND_INVERTED,
};

export const BackgroundL = Template.bind({});
BackgroundL.args = {
  children: 'Text',
  size: ButtonSize.L,
  theme: ButtonVariant.BACKGROUND,
};

export const BackgroundXL = Template.bind({});
BackgroundXL.args = {
  children: 'Text',
  size: ButtonSize.XL,
  theme: ButtonVariant.BACKGROUND,
};

export const Square = Template.bind({});
Square.args = {
  children: '>',
  size: ButtonSize.M,
  theme: ButtonVariant.BACKGROUND_INVERTED,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  size: ButtonSize.L,
  theme: ButtonVariant.BACKGROUND_INVERTED,
};
export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '>',
  size: ButtonSize.XL,
  theme: ButtonVariant.BACKGROUND_INVERTED,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'disabled',
  disabled: true,
  theme: ButtonVariant.OUTLINE,
};

export const DisabledDark = Template.bind({});
DisabledDark.args = {
  children: 'disabled',
  disabled: true,
  theme: ButtonVariant.BACKGROUND_INVERTED,
};

```
