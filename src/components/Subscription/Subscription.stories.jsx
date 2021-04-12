import React from 'react';
import { FirstStory, SecondStory } from '../RedTitle/RedTitle.stories';

export default {
  title: 'Form/Subscription',
};

FirstStory.args = {
  children: 'First',
};

export const PrimarySubscription = () => (
  <>
    <FirstStory />
    <SecondStory />
  </>
);
