import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./DrawerContent";

import Home from '../screen/Home';
import AddVehicles from '../screen/AddVehicles'



const RootDrawer = createDrawerNavigator();
const Drawer = () => {

  return (
    <RootDrawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <RootDrawer.Screen name="home" component={Home} />
      <RootDrawer.Screen name="addVehicle" component={AddVehicles} />
    </RootDrawer.Navigator>
  )
}

export default Drawer;
