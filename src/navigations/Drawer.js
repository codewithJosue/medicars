import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./DrawerContent";

import StackNavigationScreen from "./StackNavigationScreen";

const RootDrawer = createDrawerNavigator();

const Drawer = () => {

  return (
    <RootDrawer.Navigator screenOptions={{
      title:'',
      headerShown:false
    }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <RootDrawer.Screen name="init"  component={StackNavigationScreen} />
    </RootDrawer.Navigator>
  )
}

export default Drawer;
