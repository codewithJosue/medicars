import { AccessToken, LoginManager } from "react-native-fbsdk-next";
import { API_GRAPH_FACEBOOK_URL } from "@env";

export const fbAuth = async () => {
  let { isCancelled } = await LoginManager.logInWithPermissions(["public_profile"]);

  if (!isCancelled) {
    let data = await AccessToken.getCurrentAccessToken();
    let token = data.accessToken.toString();
    return await afterLoginComplete(token);
  }

  return isCancelled;
};

//id,name,first_name,last_name,gender,picture,cover&access_token=
const afterLoginComplete = async (token) => {
  const response = await fetch(`${API_GRAPH_FACEBOOK_URL}id,name,first_name,last_name,gender,picture,cover&access_token=${token}`);
  return await response.json();
};
