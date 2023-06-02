import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export const signIn = async () => {
  await GoogleSignin.configure({
    iosClientId:
      '554003163222-atm8sj278pt9u5hmojhp971adck158or.apps.googleusercontent.com',
  });

  try {
    await GoogleSignin.hasPlayServices();

    return await GoogleSignin.signIn();
  } catch (error) {
    return exceptionErros(error);
  }
};

const exceptionErros = error => {
  if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    return 'Se cancelo el inicio de sesion';
  } else if (errpr.code === statusCodes.IN_PROGRESS) {
    return 'la operacion de inicio de sesion ya esta en curso';
  } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    return 'los servicios de google play no estan disponibles';
  } else {
    return 'error desconocido';
  }
};
