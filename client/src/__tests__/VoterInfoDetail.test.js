import React from 'react'
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library'

// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect'
import VoterInfoDetail from '../components/VoterInfoDetail';

afterEach(cleanup);

it('should have a polling card', async () => {
    const { getByText } = render(<VoterInfoDetail />);

    const polling = await waitForElement(() => getByText(/Polling/i))

    expect(polling).toBeTruthy();
});

it('should have a law card', async () => {
    const { getByText } = render(<VoterInfoDetail />);

    const polling = await waitForElement(() => getByText(/Laws/i))

    expect(polling).toBeTruthy();
});

it('should have a register card', async () => {
    const { getByText } = render(<VoterInfoDetail />);

    const polling = await waitForElement(() => getByText(/Register/i))

    expect(polling).toBeTruthy();
});

it('should have a FAQ card', async () => {
    const { getByText } = render(<VoterInfoDetail />);

    const polling = await waitForElement(() => getByText(/FAQ/i))

    expect(polling).toBeTruthy();
});