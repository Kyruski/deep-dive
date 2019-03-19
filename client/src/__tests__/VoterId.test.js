import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library'

// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect'
import VoterId from '../VoterId';

afterEach(cleanup);

//I want to make a 