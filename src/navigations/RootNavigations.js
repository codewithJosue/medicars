import { NavigationContainer } from "@react-navigation/native";

import NavigationLoginRegister from "./NavigationLoginRegister";
import Drawer from "./Drawer";

const RootNavigations = () => {

  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  )
}

export default RootNavigations;
