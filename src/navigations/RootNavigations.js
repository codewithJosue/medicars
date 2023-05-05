import { NavigationContainer } from "@react-navigation/native";

import NavigationLoginRegister from "./NavigationLoginRegister";

const RootNavigations = () => {

  return (
    <NavigationContainer>
      <NavigationLoginRegister />
    </NavigationContainer>
  )
}

export default RootNavigations;
