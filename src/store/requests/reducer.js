import {
  START_REQUEST,
  END_REQUEST,
  END_REQUEST_ERROR,
  RESET_REQUEST,
} from './actions';

const initialState = {};

const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_REQUEST: {
      return {
        ...state,
        [action.payload.id]: {
          running: true,
          error: '',
          success: '',
        },
      };
    }
    case END_REQUEST: {
      return {
        ...state,
        [action.payload.id]: {
          running: false,
          error: '',
          success: action.payload.successMessage,
        },
      };
    }
    case END_REQUEST_ERROR: {
      return {
        ...state,
        [action.payload.id]: {
          running: false,
          error: action.payload.error,
          success: '',
        },
      };
    }
    case RESET_REQUEST: {
      return initialState;
    }
    default:
      return state;
  }
};

export default requestReducer;
