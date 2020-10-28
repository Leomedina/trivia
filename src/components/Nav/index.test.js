import React from 'react';
import { render } from '@testing-library/react';
import Nav from './index';

test('[Smoke Test] Nav component should render', () => {
  render(<Nav />);
});