import '@testing-library/jest-dom';

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Suppress specific warnings
const originalError = console.error;
beforeAll(() => {
  console.error = jest.fn((...args) => {
    const suppresedErrors = [
      'ReactDOM.render is no longer supported in React 18.',
      'Using UNSAFE_ lifecycle methods in strict mode is not recommended'
    ];
    
    if (!suppresedErrors.some(errorMessage => 
      args.some(arg => typeof arg === 'string' && arg.includes(errorMessage))
    )) {
      originalError(...args);
    }
  });
});

afterAll(() => {
  console.error = originalError;
});
```

This comprehensive test suite will:
1. Verify basic rendering of key pages
2. Check navigation links
3. Test routing functionality
4. Validate Redux store initialization

Recommended next steps:
1. Run the tests using `npm test`
2. Review any failures or warnings
3. Make necessary adjustments to components

Would you like me to proceed with running these tests or make any modifications?
