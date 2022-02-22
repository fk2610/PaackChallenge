export const DELIVERIES_REQUEST = 'deliveries/data-request';
export const DELIVERY_DETAILS_REQUEST = 'delivery/details-request';
export const DELIVERY_UPDATE_REQUEST = 'delivery/update-request';
export const SET_DELIVERIES_DATA = 'delivery/set-deliveries-data';
export const SET_DELIVERY_DETAILS = 'delivery/set-delivery-details';
export const SET_ACTIVE_DELIVERY = 'delivery/set-active-delivery';
export const SET_DELIVERIES_DATA_DIRTY = 'delivery/set-deliveries-data-dirty';

export const loadDeliveriesRequest = () => ({
  type: DELIVERIES_REQUEST,
});

export const loadDeliveryDetailsRequest = payload => ({
  type: DELIVERY_DETAILS_REQUEST,
  payload,
});

export const updateDeliveryRequest = payload => ({
  type: DELIVERY_UPDATE_REQUEST,
  payload,
});

export const setDeliveriesData = payload => ({
  type: SET_DELIVERIES_DATA,
  payload,
});

export const setDeliveryDetails = payload => ({
  type: SET_DELIVERY_DETAILS,
  payload,
});

export const setActiveDelivery = payload => ({
  type: SET_ACTIVE_DELIVERY,
  payload,
});

export const setDeliveriesDataDirty = payload => ({
  type: SET_DELIVERIES_DATA_DIRTY,
  payload,
});
