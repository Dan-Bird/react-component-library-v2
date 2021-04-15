export interface TestComponentProps {
    mode: 'primary' | 'secondary';
}
declare const TestComponent: ({ mode }: TestComponentProps) => JSX.Element;
export default TestComponent;
