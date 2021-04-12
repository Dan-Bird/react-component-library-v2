import React from 'react';
import PrimaryButton from './PrimaryButton';

export default {
  title: 'Buttons/Primary Button',
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
  onClick: () => console.log('onClick action'),
};
Primary.storyName = 'Primary Button';
