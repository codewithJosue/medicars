import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./DrawerContent";
import Image, { View } from "react-native";

import Home from '../screen/Home';
import AddVehicles from '../screen/AddVehicles'
import StackNavigationScreen from "./StackNavigationScreen";

const RootDrawer = createDrawerNavigator();

const Header = () => (
  <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
    <Image resizeMode="cover" style={{
      width:150,
      height:36,
      resizeMode:"contain",
      alignSelf:'center',
      marginLeft: Platform.OS === "android" ? "50%" : "0%"
    }}
           source={image}
    />
  </View>
)
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
