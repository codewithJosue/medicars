import { NavigationContainer } from "@react-navigation/native";
import RootNavigationLogin from "./RootNavigationLogin";

const RootNavigations = () => {

  return (
    <NavigationContainer>
      <RootNavigationLogin />
    </NavigationContainer>
  );
};

export default RootNavigations;
