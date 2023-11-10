import {PermissionsAndroid, Platform} from 'react-native';

export const requestLocationPermission = async () => {
  let granted;

  try {
    if (Platform.OS === 'ios') {
      granted = await Geolocation.requestAuthorization('always');
    } else {
      granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permiso de geolocalización',
          message: '¿Podemos acceder a su ubicación?',
          buttonNeutral: 'Pregúntame Luego',
          buttonNegative: 'Cancelar',
          buttonPositive: 'Aceptar',
        },
      );
    }
  } catch (error) {
    return error.message;
  }

  return granted;
};
