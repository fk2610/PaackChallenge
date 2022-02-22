export const START_REQUEST = 'requests/start-request';
export const END_REQUEST = 'requests/end-request';
export const END_REQUEST_ERROR = 'requests/end-request-with-error';
export const RESET_REQUEST = 'requests/reset';

export const startRequest = id => ({
  type: START_REQUEST,
  payload: { id },
});

export const endRequest = (id, successMessage) => ({
  type: END_REQUEST,
  payload: { id, successMessage },
});

export const endRequestWithError = (id, error) => ({
  type: END_REQUEST_ERROR,
  payload: { id, error },
});

export const resetRequests = () => ({
  type: RESET_REQUEST,
});
