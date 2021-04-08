// Generated with util/create-component.js
import React from 'react';
import PrimaryButton from './PrimaryButton';

export default {
  title: 'PrimaryButton',
  component: PrimaryButton,
  args: {
    children: 'Primary Button',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = args => <PrimaryButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  argOne: true,
};
Primary.storyName = 'Primary Button';
