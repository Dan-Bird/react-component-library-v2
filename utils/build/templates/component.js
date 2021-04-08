module.exports = componentName => ({
  content: `import React from 'react';
import { ${componentName}Container } from './${componentName}.styles';

export type ${componentName}Props = {
  foo: 'test' | 'example test';
};

const ${componentName}: React.FC<${componentName}Props> = () => (
  <${componentName}Container data-testid="example" />
);

export default ${componentName};

`,
  extension: `.tsx`,
});
