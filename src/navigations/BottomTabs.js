import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import color from 'color';

import {Account, Home} from '../screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import route from './route';
import colors from '../config/colors';
import iconSize from '../config/iconSize';
import {StyleSheet} from 'react-native';

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
              return (
                <Icon
                  style={focused ? styles.tabBarTitle : null}
                  name={nameIcon}
                  color={colors.secondary}
                  size={iconSize.medium}
                />
              );
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

              return (
                <Icon
                  style={focused ? styles.tabBarTitle : null}
                  name={nameIcon}
                  color={colors.secondary}
                  size={iconSize.medium}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  tabBarTitle: {
    borderTopWidth: 2,
    borderStyle: 'solid',
    borderColor: colors.primary,
  },
});
