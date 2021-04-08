module.exports = componentName => ({
  content: `// Generated with util/create-component.js
import React from "react";
import ${componentName} from "./${componentName}";

export default {
  title: "${componentName}",
  component: ${componentName}
};

export const First = () => <${componentName} foo='test' />;
`,
  extension: `.stories.tsx`,
});
