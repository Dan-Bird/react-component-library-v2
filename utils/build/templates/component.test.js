module.exports = (componentName) => ({
  content: `import React from 'react';
import { render, screen } from '@testing-library/react';

import ${componentName}, { ${componentName}Props } from './${componentName}';

describe('Test Component', () => {
  let props: ${componentName}Props;

  it('should render correctly', () => {
    render(<${componentName} {...props} />);

    expect(screen.getByTestId(/example/i)).toBeInTheDocument();
  });
});

`,
  extension: `.test.tsx`,
});
