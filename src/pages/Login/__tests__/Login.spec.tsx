import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '..';

describe('Login page', () => {
  beforeEach(() => {
    render(<Login />);
  });

  it('should have correct slogan text', () => {
    const text = screen.getByText('Login Page.');
    expect(text).toBeInTheDocument();
  });
});
