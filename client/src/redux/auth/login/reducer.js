import { AuthLoginActionTypes } from './types';

const INIT_STATE = {
  error: '',
  loading: false,
  isUserLoggedIn: false,
  isUserLoggedOut: false
};

const Login = (state = INIT_STATE, action) => {
  switch (action.type) {
    case AuthLoginActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case AuthLoginActionTypes.LOGIN_USER:
          return {
            ...state,
            user: action.payload.data,
            loading: false,
            isUserLoggedIn: true,
          };
        case AuthLoginActionTypes.LOGOUT_USER:
          return {
            ...state,
            loading: false,
            isUserLoggedOut: true,
          };
        default:
          return { ...state };
      }

    case AuthLoginActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case AuthLoginActionTypes.LOGIN_USER:
          return {
            ...state,
            error: action.payload.error,
            loading: false,
            isUserLoggedIn: false,
          };
        case AuthLoginActionTypes.LOGOUT_USER:
          return {
            ...state,
            loading: false,
            isUserLoggedOut: false,
          };
        default:
          return { ...state };
      }

    case AuthLoginActionTypes.LOGIN_USER: {
      return {
        ...state,
        loading: true,
        isUserLoggedIn: false,
      };
    }

    case AuthLoginActionTypes.LOGOUT_USER:
      return {
        ...state,
        loading: false,
        isUserLoggedOut: false,
      };
    default:
      return { ...state };
  }
}

export default Login;