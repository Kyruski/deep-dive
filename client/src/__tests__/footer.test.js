import React from 'react'
import { render, cleanup, configure } from 'react-testing-library'

// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect'
import Footer from '../footer';

afterEach(cleanup);
configure({ testIdAttribute: 'test-id' });

const setup = () => {
  const { getByTestId } = render(<Footer />);
  const form = getByTestId('footer');
  return { form };
}

it('footer is on the page', () => {
  const form = setup();
  expect(form).toBeTruthy();
});