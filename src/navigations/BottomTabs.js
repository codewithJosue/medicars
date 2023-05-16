import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import color from 'color';

import { Account, Home } from "../screen";
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import route from "./route";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {

  const theme = useTheme();

  return (
    <>
      <Tab.Navigator screenOptions={{
        headerShown:false
      }}
        initialRouteName={route.HOME}
        backBehavior="initialRoute"
        shifting={true}
        activeColor={theme.colors.primary}
        inactiveColor={color(theme.colors.text).alpha(0.6).rgb().string()}
        sceneAnimationEnabled={false}
      >
        <Tab.Screen
          name={route.HOME}
          component={Home}
          options={{
            title:"Inicio",
            tabBarIcon: ({color, size})=> (
              <Icon name='home' color={color} size={size} />
            ),

          }}
        />

        <Tab.Screen
          name="account"
          component={Account}
          options={{
            title:"Cuenta",
            tabBarIcon: ({color,size})=> (
              <Icon name='shopping-outline' color={color} size={size} />
            )

          }}
        />
      </Tab.Navigator>
    </>
  )
}

export default BottomTabs;
