import { render, screen } from '@testing-library/react';
import { Button, DisplayScreen } from './index';

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

test('renders DisplayScreen', () => {
  render(<DisplayScreen value='test' />);

  const DisplayScreenElement = screen.getByText('test');
  expect(DisplayScreenElement).toBeInTheDocument();
});
