import {
  SET_DELIVERIES_DATA,
  SET_DELIVERY_DETAILS,
  SET_ACTIVE_DELIVERY,
  SET_DELIVERIES_DATA_DIRTY,
} from './actions';

const initialState = {
  deliveriesData: [],
  deliveryDetails: {},
  activeDelivery: null,
  isDeliveriesDataDirty: false,
};

const deliveriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DELIVERIES_DATA: {
      return {
        ...state,
        isDeliveriesDataDirty: false,
        deliveriesData: action.payload.sort(function (a) {
          if (a?.delivery?.status === 'idle') {
            return -1;
          } else {
            return 0;
          }
        }),
      };
    }
    case SET_DELIVERY_DETAILS: {
      return {
        ...state,
        deliveryDetails: action.payload,
      };
    }
    case SET_ACTIVE_DELIVERY: {
      return {
        ...state,
        activeDelivery: action.payload,
      };
    }
    case SET_DELIVERIES_DATA_DIRTY: {
      return {
        ...state,
        isDeliveriesDataDirty: action.payload,
      };
    }
    default:
      return state;
  }
};

export default deliveriesReducer;
