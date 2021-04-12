import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SecondaryButton from './SecondaryButton';

describe('SecondaryButton', () => {
  it('should render with correct text', () => {
    const BUTTON_TEXT = 'Button Text';

    render(<SecondaryButton>{BUTTON_TEXT}</SecondaryButton>);

    expect(screen.getByRole('button')).toHaveTextContent(BUTTON_TEXT);
  });

  it('should render with passed classNames', () => {
    const TEST_CLASS = 'test-class';

    render(
      <SecondaryButton className={TEST_CLASS}>Button Text</SecondaryButton>
    );

    expect(screen.getByRole('button')).toHaveClass(TEST_CLASS);
  });

  it('should render with other passed props', () => {
    const handleClick = jest.fn();

    render(
      <SecondaryButton onClick={() => handleClick()}>
        Button Text
      </SecondaryButton>
    );

    expect(handleClick).toHaveBeenCalledTimes(0);

    userEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
