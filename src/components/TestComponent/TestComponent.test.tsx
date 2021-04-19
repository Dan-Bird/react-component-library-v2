import React from 'react';
import { render, screen } from '@testing-library/react';

import TestComponent, { TestComponentProps } from './TestComponent';

describe('Test Component', () => {
  let props: TestComponentProps;

  beforeEach(() => {
    props = {
      mode: 'primary',
    };
  });

  const renderComponent = () => render(<TestComponent {...props} />);

  it('should have primary style with default props', () => {
    renderComponent();

    const testComponent = screen.getByTestId('test-component');

    expect(testComponent).toHaveStyle(`background-color: white;`);
  });

  it('should have secondary style when theme is set to secondary', () => {
    props.mode = 'secondary';
    renderComponent();

    const testComponent = screen.getByTestId('test-component');

    expect(testComponent).toHaveStyle(`
      background-color: black;
      color: white;
    `);
  });
});
