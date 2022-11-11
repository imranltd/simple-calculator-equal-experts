import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './index';

test('renders Button', () => {
  render(<Button value='test' onClickFn={() => {}} cssClass='noClass' />);

  const ButtonElement = screen.getByText(/test/i);
  expect(ButtonElement).toBeInTheDocument();
});

test('renders button no className', () => {
  render(<Button value='test' onClickFn={() => {}} />);

  const ButtonElement = screen.getByText(/test/i);
  expect(ButtonElement).toBeInTheDocument();
});
