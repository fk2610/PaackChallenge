import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import {
  DELIVERIES_REQUEST,
  DELIVERY_UPDATE_REQUEST,
  DELIVERY_DETAILS_REQUEST,
  setDeliveriesData,
  setDeliveryDetails,
  setDeliveriesDataDirty,
  setActiveDelivery,
} from './actions';
import { getUserCoordinates } from '../user/selectors';
import makeRequest from '../requests/makeRequest';
import {
  getDeliveriesDataApi,
  getDeliveryDetailsApi,
  updateDeliveryApi,
} from '../../api/deliveries';
import { getRequestError } from '../requests/selectors';

export function* workerLoadDeliveriesData(action) {
  yield call(makeRequest, {
    endpoint: getDeliveriesDataApi,
    requestAction: action,
    receiveAction: setDeliveriesData,
  });
}

export function* workerLoadDeliveryDetails(action) {
  yield call(makeRequest, {
    endpoint: getDeliveryDetailsApi,
    params: action.payload,
    requestAction: action,
    receiveAction: setDeliveryDetails,
  });
}

export function* workerUpdateDeliveryRequest(action) {
  const { id, status } = action.payload;
  const { latitude, longitude } = yield select(getUserCoordinates);
  const params = { id, delivery: { status, latitude, longitude } };
  yield put(setDeliveriesDataDirty(true));
  yield call(makeRequest, {
    endpoint: updateDeliveryApi,
    params,
    requestAction: action,
    receiveAction: setDeliveryDetails,
  });
  const error = yield select(state =>
    getRequestError(state, DELIVERY_UPDATE_REQUEST),
  );
  if (!error) {
    yield put(setActiveDelivery(null));
  }
}

export default function* deliveriesSagas() {
  yield all([
    takeLatest(DELIVERIES_REQUEST, workerLoadDeliveriesData),
    takeLatest(DELIVERY_DETAILS_REQUEST, workerLoadDeliveryDetails),
    takeLatest(DELIVERY_UPDATE_REQUEST, workerUpdateDeliveryRequest),
  ]);
}
