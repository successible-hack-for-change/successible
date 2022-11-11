// src/setupTests.js
import { server } from './__mocks__/server.ts';
import { TextEncoder } from 'util';

global.TextEncoder = TextEncoder;
// Establish API mocking before all tests.
beforeAll(() => {
  server.listen();
  window.speechSynthesis = {
    onvoiceschanged: jest.fn(),
    paused: false,
    pending: true,
    speaking: false,
    cancel: jest.fn(),
    getVoices: jest.fn().mockReturnValue([{ name: 'Daniel' }]),
    pause: jest.fn(),
    resume: jest.fn(),
    speak: jest.fn(),
    addEventListener,
    removeEventListener,
    dispatchEvent,
  };
  window.SpeechSynthesisUtterance = jest.fn().mockImplementation(() => true);
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
