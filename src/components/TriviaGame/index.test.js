import React from 'react';
import { render } from '@testing-library/react';
import TriviaGame from './index';

test('[Smoke Test] Main Trivia Game component should render', () => {
  render(<TriviaGame />);
});