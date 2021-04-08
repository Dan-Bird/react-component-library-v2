import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PrimaryButton from './PrimaryButton';

describe('PrimaryButton', () => {
  it('should render with correct text', () => {
    const BUTTON_TEXT = 'Button Text';

    render(<PrimaryButton>{BUTTON_TEXT}</PrimaryButton>);

    expect(screen.getByRole('button')).toHaveTextContent(BUTTON_TEXT);
  });

  it('should render with passed classNames', () => {
    const TEST_CLASS = 'test-class';

    render(<PrimaryButton className={TEST_CLASS}>Button Text</PrimaryButton>);

    expect(screen.getByRole('button')).toHaveClass(TEST_CLASS);
  });

  it('should render with other passed props', () => {
    const handleClick = jest.fn();

    render(
      <PrimaryButton onClick={() => handleClick()}>Button Text</PrimaryButton>
    );

    expect(handleClick).toHaveBeenCalledTimes(0);

    userEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
