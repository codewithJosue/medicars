import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

//const keys
const userToken = 'userToken';
const userEmail = 'userEmail';

//save token and email
const setTokenEmail = async (token, email) => {
  try {
    await AsyncStorage.setItem(userToken, token);
    await AsyncStorage.setItem(userEmail, email);
  } catch (error) {
    console.log('Error storing the auth token', error);
  }
};

//get token
const getToken = async () => {
  try {
    return await AsyncStorage.getItem(userToken);
  } catch (error) {
    console.log('error gettting the auth token', error);
  }
};

//decode token
const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

//Get email
const getEmail = async () => {
  const mail = await AsyncStorage.getItem(userEmail);
  return mail ? mail : null;
};

//remove token
const removeTokenEmail = async () => {
  try {
    await AsyncStorage.removeItem(userToken);
    await AsyncStorage.removeItem(userEmail);
  } catch (error) {
    console.log('error removing the auth token', error);
  }
};

export default {
  getToken,
  getUser,
  getEmail,
  removeTokenEmail,
  setTokenEmail,
};
