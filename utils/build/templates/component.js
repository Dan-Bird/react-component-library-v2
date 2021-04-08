module.exports = componentName => ({
  content: `import React from 'react';
import { ${componentName}Container } from './${componentName}.styles';

export interface ${componentName}Props {
  foo: 'test' | 'example test';
};

const ${componentName} = ({ foo }: ${componentName}Props) => (
  <div data-testid='example'></div>
);

export default ${componentName};

`,
  extension: `.tsx`,
});
