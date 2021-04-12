import React from 'react';
import SecondaryButton from './SecondaryButton';

export default {
  title: 'Buttons/Secondary Button',
  component: SecondaryButton,
  args: {
    children: 'Secondary Button',
  },
};

const Template = args => <SecondaryButton {...args} />;

export const Secondary = Template.bind({});

Secondary.args = {
  onClick: () => console.log('onClick action'),
};
Secondary.storyName = 'Secondary Button';
