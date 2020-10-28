import React from 'react';
import { render } from '@testing-library/react';
import Header from './index';

test('[Smoke Test] Header component should render', () => {
  render(<Header />);
});