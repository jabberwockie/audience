import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('loads App', async () => {
  render(<App />);
  const loading = screen.getByText(/Loading.../i);
  expect(loading).toBeInTheDocument();
});
