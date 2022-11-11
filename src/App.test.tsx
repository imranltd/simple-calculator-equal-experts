import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const HeaderElement = screen.getByText(/Equal Experts Calculator/i);
  expect(HeaderElement).toBeInTheDocument();
});

test('calcualte simple sum "786+786"', () => {
  render(<App />);
  const DisplayElement = screen.getByTestId('display');
  expect(DisplayElement).toHaveTextContent('');

  const Digit7 = screen.getByText('7');
  const Digit8 = screen.getByText('8');
  const Digit6 = screen.getByText('6');
  const OperatorPlus = screen.getByText('+');
  const Evaluate = screen.getByText('=');
  const Clear = screen.getByText('AC');

  expect(Digit7).toBeInTheDocument();

  fireEvent.click(Digit7);
  fireEvent.click(Digit8);
  fireEvent.click(Digit6);

  expect(within(DisplayElement).getByText('786')).toBeInTheDocument();

  fireEvent.click(OperatorPlus);

  fireEvent.click(Digit7);
  fireEvent.click(Digit8);
  fireEvent.click(Digit6);

  expect(within(DisplayElement).getByText('786+786')).toBeInTheDocument();

  fireEvent.click(Evaluate);

  expect(within(DisplayElement).getByText('1572')).toBeInTheDocument();

  fireEvent.click(Clear);

  expect(within(DisplayElement).getByText('')).toBeInTheDocument();
});
