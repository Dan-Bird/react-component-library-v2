import React from 'react';
import PrimaryButton from './PrimaryButton';
import { BaseButtonProps } from '../BaseButton/BaseButton';

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

const Template = (args: BaseButtonProps) => <PrimaryButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  onClick: () => console.log('onClick action'),
};
Primary.storyName = 'Primary Button';
