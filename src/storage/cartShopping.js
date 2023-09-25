import AsyncStorage from '@react-native-async-storage/async-storage';

const cart = '@cart_shopping';

export const setCartShopping = async dataCart => {
  try {
    await AsyncStorage.setItem(cart, JSON.stringify(dataCart));
  } catch (error) {
    new Error('Error al guardar los datos del carrito');
  }
};

export const getCartShopping = async () => {
  const jsonData = await AsyncStorage.getItem(cart);
  return jsonData != null ? await JSON.parse(jsonData) : [];
};

export const removeCartShopping = async () => {
  try {
    await AsyncStorage.removeItem(cart);
  } catch (e) {
    return new Error(e);
  }

  console.log('Done remove cart shopping!');
};

export const getCountCartShopping = async () => {
  let count = 0;
  await getCartShopping().then(data => {
    if (data != null) count = data.length;
  });

  return count;
};
