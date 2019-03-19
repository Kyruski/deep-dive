import React from 'react';
import { render, cleanup, fireEvent, configure } from 'react-testing-library';
import CandidateDetail from '../components/CandidateDetail.js';
import 'jest-dom/extend-expect';

afterEach(cleanup);
configure({ testIdAttribute: 'test-id'})
const setup = () => {
  const CanDs = render(<CandidateDetail />);
  const check = CanDs.getAllByTestId('parentID');
  return check;
}
it('should render a parent div', () => {
  const parentDiv = setup();
  expect(parentDiv).toBeTruthy();
});