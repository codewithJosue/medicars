import {NavigationContainer} from '@react-navigation/native';
import Drawer from './Drawer';
import StackNavigationLogin from './StackNavigationLogin';
import ShoppingCartContext from '../contexts/shoppingCartContext';
import {getCartShopping, setCartShopping} from '../storage/cartShopping';
import {useEffect, useReducer} from 'react';
import cartShoppingReducer from '../reducer/cartShopping';

const RootNavigations = () => {
  const [state, dispatch] = useReducer(cartShoppingReducer, []);
  const getDataCartShopping = async () => {
    const cart = await getCartShopping();

    console.log('APP', cart);
    dispatch({type: 'INITIAL', payload: cart});
  };

  useEffect(() => {
    getDataCartShopping();
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        state,
        dispatch,
        setCartShopping,
      }}>
      <NavigationContainer>
        <StackNavigationLogin />
      </NavigationContainer>
    </ShoppingCartContext.Provider>
  );
};

export default RootNavigations;
