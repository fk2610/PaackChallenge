import { SET_USER_COORDINATES } from './actions';

const initialState = {
  coordinates: {},
};

const deliveriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_COORDINATES: {
      return {
        ...state,
        coordinates: action.payload,
      };
    }
    default:
      return state;
  }
};

export default deliveriesReducer;
