import React from 'react';
import { TestingCompDoisContainer } from './TestingCompDois.styles';

export type TestingCompDoisProps = {
  foo: 'test' | 'example test';
};

const TestingCompDois: React.FC<TestingCompDoisProps> = () => (
  <TestingCompDoisContainer data-testid="example" />
);

export default TestingCompDois;

