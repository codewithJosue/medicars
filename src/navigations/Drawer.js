import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./DrawerContent";

import MaintenanceHistory from '../screen/MaintenanceHistory';
import PurchaseHistory from '../screen/PurchaseHistory';



const RootDrawer = createDrawerNavigator();
const Drawer = () => {

  return (
    <RootDrawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <RootDrawer.Screen name="historyMaintenances" component={MaintenanceHistory} />
      <RootDrawer.Screen name="historyPurchase" component={PurchaseHistory} />
    </RootDrawer.Navigator>
  )
}

export default Drawer;
