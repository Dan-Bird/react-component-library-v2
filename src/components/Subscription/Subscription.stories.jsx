import React from 'react';
import { Primary } from '../PrimaryButton/PrimaryButton.stories';
import { Secondary } from '../SecondaryButton/SecondaryButton.stories';

export default {
  title: 'Form/Subscription',
};

Primary.args = {
  children: 'Primary Button',
};

Secondary.args = {
  children: 'Secondary Button',
};

export const PrimarySubscription = () => (
  <>
    <Primary {...Primary.args} />
    <Secondary {...Secondary.args} />
  </>
);
