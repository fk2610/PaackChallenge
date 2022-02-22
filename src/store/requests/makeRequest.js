import { put, call } from 'redux-saga/effects';

import { startRequest, endRequest, endRequestWithError } from './actions';

export default function* (options) {
  const {
    endpoint,
    params = [],
    requestAction,
    successMessage = '',
    receiveAction,
    receiveActionParams = [],
  } = options;

  try {
    // Start tracking of the network request.
    yield put(startRequest(requestAction.type));

    // Start the network request.
    const result = yield call(endpoint, params);

    // Update the store with the results.
    if (receiveAction) {
      if (receiveActionParams.length) {
        yield put(
          receiveAction({
            response: result,
            customParams: receiveActionParams,
          }),
        );
      } else {
        yield put(receiveAction(result));
      }
    }

    // Stop tracking of the network request.
    yield put(endRequest(requestAction.type, successMessage));
  } catch (error) {
    // Stop tracking of the network request and store the error.
    yield put(endRequestWithError(requestAction.type, error));
  }
}
