import React from 'react';
import TestComponent from './TestComponent';

export default {
  title: 'TestComponent',
  component: TestComponent,
};

export const Primary = () => <TestComponent mode='primary' />;

export const Secondary = () => <TestComponent mode='secondary' />;
