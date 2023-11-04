import {NavigationContainer} from '@react-navigation/native';
import Drawer from './Drawer';
import StackNavigationLogin from './StackNavigationLogin';
import ShoppingCartContext from '../contexts/shoppingCartContext';
import {getCartShopping, setCartShopping} from '../storage/cartShopping';
import React, {useEffect, useMemo, useReducer} from 'react';
import cartShoppingReducer from '../reducer/cartShoppingReducer';
import authLoginReducer from '../reducer/authLoginReducer';
import authStorage from '../storage/authStorage';
import AppLoading from '../components/notify/AppLoading';
import AuthLoginContext from '../contexts/authLoginContext';

const RootNavigations = () => {
  const [state, dispatch] = useReducer(cartShoppingReducer, []);
  const {loginState, dispatch: loginDispatch} = authLoginReducer.Dispatch();

  const authContext = useMemo(() => ({
    signIn: async user => {
      await authStorage.setTokenEmail(user.token, user.email);
      loginDispatch({type: 'LOGIN', uid: user.email, token: user.token});
    },
    signOut: async () => {
      await authStorage.removeTokenEmail();
      loginDispatch({type: 'LOGOUT'});
    },
    signUp: async user => {
      await authStorage.setTokenEmail(user.token, user.email);
      loginDispatch({type: 'REGISTER', uid: user.email, token: user.token});
    },
  }));

  const getDataCartShopping = async () => {
    const cart = await getCartShopping();

    console.log('APP', cart);
    dispatch({type: 'INITIAL', payload: cart});
  };

  const getRetrieveToken = async () => {
    const userToken = await authStorage.getToken();
    console.log('APP TOKEN', userToken);
    loginDispatch({type: 'RETRIEVE_TOKEN', token: userToken});
  };

  useEffect(() => {
    getDataCartShopping();
    getRetrieveToken();
  }, []);

  if (loginState.isLoading) return <AppLoading />;

  return (
    <AuthLoginContext.Provider value={authContext}>
      <ShoppingCartContext.Provider
        value={{
          state,
          dispatch,
          setCartShopping,
        }}>
        <NavigationContainer>
          {loginState.userToken ? <Drawer /> : <StackNavigationLogin />}
        </NavigationContainer>
      </ShoppingCartContext.Provider>
    </AuthLoginContext.Provider>
  );
};

export default RootNavigations;
