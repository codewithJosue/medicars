import { AccessToken, LoginManager } from "react-native-fbsdk-next";

export const fbAuth = async () => {
  let { isCancelled } = await LoginManager.logInWithPermissions(["public_profile"]);

  if (!isCancelled) {
    let data = await AccessToken.getCurrentAccessToken();
    let token = data.accessToken.toString();
    return await afterLoginComplete(token);
  }

  return isCancelled;
};

const afterLoginComplete = async (token) => {
  const response = await fetch(
    `https://graph.facebook.com/me?fields=id,name,first_name,last_name,gender,picture,cover&access_token=${token}`);
  return await response.json();
};
