import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home component title', () => {
  render(<App />);
  const titleElement = screen.getByText(/LET ME INTRODUCE MYSELF/i); // Update this to match your Home component text
  expect(titleElement).toBeInTheDocument();
});

test('renders footer with copyright', () => {
  render(<App />);
  const copyrightElement = screen.getByText(/Copyright ©/i); // Change this to match the actual copyright text
  expect(copyrightElement).toBeInTheDocument();
});
