export function isRequestRunning(state, request, initialValue = false) {
  return state.request[request]?.running ?? initialValue;
}

export function getRequestError(state, request) {
  return state.request[request]?.error ?? '';
}

export function getRequestSuccess(state, request) {
  return state.request[request]?.success ?? '';
}
