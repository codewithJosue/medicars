import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import color from "color";

import { HomeScreen, Settings } from "../screen";
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import route from "./route";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {

  const theme = useTheme();

  return (
    <>
      <Tab.Navigator screenOptions={{
        headerShown: false,
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
          component={HomeScreen}
          options={{
            title: "Inicio",
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={colors.primary} size={size} />
            ),

          }}
        />

        <Tab.Screen
          name="account"
          component={Settings}
          options={{
            title: "Cuenta",
            tabBarIcon: ({ color, size }) => (
              <Icon name="cogs" color={colors.primary} size={size} />
            ),

          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabs;
