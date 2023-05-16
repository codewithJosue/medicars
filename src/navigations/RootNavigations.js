import { NavigationContainer } from "@react-navigation/native";
import StackNavigationLoginRegister from "./StackNavigationLoginRegister";

const RootNavigations = () => {

  return (
    <NavigationContainer>
      <StackNavigationLoginRegister />
    </NavigationContainer>
  );
};

export default RootNavigations;
