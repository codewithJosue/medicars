import { NavigationContainer } from "@react-navigation/native";
import StackNavigationLogin from "./StackNavigationLogin";

const RootNavigations = () => {

  return (
    <NavigationContainer>
      <StackNavigationLogin />
    </NavigationContainer>
  );
};

export default RootNavigations;
