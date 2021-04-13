import React from 'react';
import { Story, Meta } from '@storybook/react';
import Icon, { IconProps } from './Icon';

export default {
  title: 'Icons/Icon Component',
  component: Icon,
  argTypes: {
    icon: { control: 'select' },
  },
} as Meta;

const Template: Story<IconProps> = args => <Icon {...args} />;

export const FirstStory = Template.bind({});
FirstStory.args = {
  className: 'example-class',
  size: 'medium',
  icon: 'bell',
};
