import { Story } from '@storybook/react';
// eslint-disable-next-line appo-fsd-plugin/layer-imports
import '@/app/styles/index.scss';

export const StyleDecorator = (StoryComponent: Story) => (
  <StoryComponent />
);
