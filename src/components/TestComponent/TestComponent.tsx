import React from 'react';
import { Heading, Container } from './TestComponent.styles';

export interface TestComponentProps {
  mode: 'primary' | 'secondary';
}

const TestComponent = ({ mode }: TestComponentProps) => (
  <Container data-testid='test-component' mode={mode}>
    <Heading>I'm the test component</Heading>
    <h2>Made with love by Dan</h2>
  </Container>
);

export default TestComponent;
