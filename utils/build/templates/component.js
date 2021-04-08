module.exports = componentName => ({
  content: `import React from 'react';
import { ${componentName}Container } from './${componentName}.styles';

export interface ${componentName}Props {
  foo: 'test' | 'example test';
};

const ${componentName}: React.FC<${componentName}Props> = () => (
  <${componentName}Container data-testid="example" />
);

export default ${componentName};

`,
  extension: `.tsx`,
});
