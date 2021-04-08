module.exports = componentName => ({
  content: `import React from 'react';
import { render, screen } from '@testing-library/react';

import TestingComp, { TestingCompProps } from './TestingComp';

describe('Test Component', () => {
  let props: TestingCompProps;

  it('should render correctly', () => {
    render(<TestingComp {...props} />);

    expect(screen.getByTestId(/example/i)).toBeInTheDocument();
  });
});

`,
  extension: `.test.tsx`,
});
