import AsyncStorage from '@react-native-async-storage/async-storage';

const cart = '@cart_shopping';

const setCartShopping = async dataCart => {
  try {
    await AsyncStorage.setItem(cart, JSON.stringify(dataCart));
  } catch (error) {
    new Error('Error al guardar los datos del carrito');
  }
};

const GetCartShopping = () => {
  const jsonData = AsyncStorage.getItem(cart);
  return jsonData != null ? JSON.parse(jsonData) : null;
};
