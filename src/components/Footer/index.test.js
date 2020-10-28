import React from 'react';
import { render } from '@testing-library/react';
import Footer from './index';

test('[Smoke Test] Footer component should render', () => {
  render(<Footer />);
});