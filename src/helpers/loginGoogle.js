import { ANDROID_CLIENT_ID, IOS_CLIENT_ID } from "@env";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";

export const signIn = async () => {
  await GoogleSignin.configure({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
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
    return "Se cancelo el inicio de sesion";
  } else if (error.code === statusCodes.IN_PROGRESS) {
    return "la operacion de inicio de sesion ya esta en curso";
  } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    return "los servicios de google play no estan disponibles";
  } else {
    return "error desconocido";
  }
};
