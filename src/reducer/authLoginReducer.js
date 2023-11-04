import {useReducer} from 'react';

const initialLoginState = {
  isLoading: true,
  userToken: null,
  email: null,
};

const authLoginReducer = (state, action) => {
  switch (action.type) {
    case 'RETRIEVE_TOKEN':
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      };
    case 'LOGIN':
      return {
        ...state,
        userToken: action.token,
        email: action.uid,
        isLoading: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        userToken: null,
        email: null,
        isLoading: false,
      };
    case 'REGISTER':
      return {
        ...state,
        userToken: action.token,
        email: action.uid,
        isLoading: false,
      };
    default:
      break;
  }
};

const Dispatch = () => {
  const [loginState, dispatch] = useReducer(
    authLoginReducer,
    initialLoginState,
  );

  return {loginState, dispatch};
};
export default {
  Dispatch,
};
