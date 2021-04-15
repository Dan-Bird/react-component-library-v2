import React from 'react';
import ThemedComponent, { ThemedComponentProps } from './ThemedComponent';

const themeMap = {
  'Light Theme': {
    mode: 'light',
  },
  'Dark Theme': {
    mode: 'dark',
  },
};

export default {
  title: 'Themed Component',
  component: ThemedComponent,
  args: {
    theme: {
      mode: 'light',
    },
  },
  argTypes: {
    theme: {
      options: Object.keys(themeMap),
      mapping: themeMap,
      table: {
        type: {
          default: 'some default',
          summary: 'example',
          detail: `{ mode: 'light' | 'dark' }`,
        },
      },
      control: {
        type: 'radio',
      },
    },
  },
};

const Template = (args: ThemedComponentProps) => <ThemedComponent {...args} />;

export const LightStory = Template.bind({});
LightStory.args = {
  theme: {
    mode: 'light',
  },
};
LightStory.storyName = 'Themed Component (light)';
