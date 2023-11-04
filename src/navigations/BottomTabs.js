import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import color from 'color';

import {Account, Home} from '../screen';
import route from './route';
import colors from '../config/colors';
import AppIcon from './AppIcon';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
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
            tabBarLabel: 'Principal',
            tabBarLabelStyle: {fontSize: 12},
            tabBarIcon: ({focused}) => {
              let nameIcon = 'home';
              if (!focused) {
                nameIcon = 'home-outline';
              }
              return <AppIcon name={nameIcon} />;
            },
          }}
        />

        <Tab.Screen
          name={route.ACCOUNT}
          component={Account}
          options={{
            tabBarLabel: 'Tú',
            tabBarLabelStyle: {fontSize: 12},
            //tabBarItemStyle: {borderTopWidth: 1},
            tabBarIcon: ({focused}) => {
              let nameIcon = 'account-heart';
              if (!focused) {
                nameIcon = 'account-heart-outline';
              }

              return <AppIcon name={nameIcon} />;
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabs;
