import React from 'react';
import { render } from '@testing-library/react';
import Trivia from './index';

test('[Smoke Test] Main Trivia component should render', () => {
  render(<Trivia />);
});