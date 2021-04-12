import React from 'react';
import RedTitle from './RedTitle';

export default {
  title: 'Headings/Red Title',
  component: RedTitle,
  args: {
    children: 'Red Title',
  },
};

const Template = args => <RedTitle {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  children: 'First',
};

export const SecondStory = Template.bind({});

SecondStory.args = {
  children: 'Second',
};
