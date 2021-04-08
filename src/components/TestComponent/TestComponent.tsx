import React from "react";
import { Heading, Container } from "./TestComponent.styles";

export type TestComponentProps = {
  theme: "primary" | "secondary";
};

const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <Container data-testid="test-component" theme={theme}>
    <Heading>I'm the test component</Heading>
    <h2>Made with love by Dan</h2>
  </Container>
  // <div>
  //   <h1>I'm the test component</h1>
  //   <h2>Made with love by Dan</h2>
  // </div>
);

export default TestComponent;
