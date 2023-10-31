import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import color from 'color';

import {Account, Home} from '../screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import route from './route';
import colors from '../config/colors';
import iconSize from '../config/iconSize';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {height: 40},
        }}
        initialRouteName={route.HOME}
        backBehavior="initialRoute"
        shifting={true}
        activeColor={colors.primary}
        inactiveColor={color(colors.light).alpha(0.6).rgb().string()}
        sceneAnimationEnabled={false}>
        <Tab.Screen
          name={route.HOME}
          component={Home}
          options={{
            title: 'Inicio',
            tabBarIcon: () => (
              <Icon
                name="home-outline"
                color={colors.secondary}
                size={iconSize.small}
              />
            ),
          }}
        />

        <Tab.Screen
          name={route.ACCOUNT}
          component={Account}
          options={{
            title: 'Cuenta',
            tabBarIcon: () => (
              <Icon
                name="cogs"
                color={colors.secondary}
                size={iconSize.small}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabs;
