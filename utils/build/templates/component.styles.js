module.exports = componentName => ({
  content: `import styled from 'styled-components';

export const ${componentName}Container = styled.div\`
  background-color: white;
  border: 1px solid black;
\`;

`,
  extension: `.styles.tsx`,
});
