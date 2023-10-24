import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import color from 'color';

import {Home, Settings} from '../screen';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import route from './route';
import colors from '../config/colors';
import iconSize from '../config/iconSize';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const theme = useTheme();

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
            tabBarIcon: ({color, size}) => (
              <Icon
                name="home-outline"
                color={colors.secondary}
                size={iconSize.small}
              />
            ),
          }}
        />

        <Tab.Screen
          name="account"
          component={Settings}
          options={{
            title: 'Opciones',
            tabBarIcon: ({color, size}) => (
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
