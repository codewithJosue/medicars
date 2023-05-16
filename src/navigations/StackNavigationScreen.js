import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerActions, useTheme } from "@react-navigation/native";
import {Appbar} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {AddVehicles} from '../screen/';

import BottomTabs from "./BottomTabs";
import route from "./route";

const Stack = createStackNavigator();

const StackNavigationScreen = () => {

const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerMode:'screen',
        header: ({options ,navigation, back, route })=> {
          const title = options.headerTitle !== undefined
          ? options.headerTitle
            : options.title !== undefined
          ? options.title : route.name;

          return (
            <Appbar.Header theme={{colors: {primary: theme.colors.background}}}>
              {back ? (
                <Appbar.BackAction
                  style={styles.back}
                  onPress={navigation.goBack}
                  color={theme.colors.primary}
                />
              ) : (
                <TouchableOpacity
                  style={{marginLeft: 10}}
                  onPress={() => {
                    navigation.dispatch(DrawerActions.openDrawer());
                  }}>
                  <Icon name="align-left" size={25} color={theme.colors.primary} />
                </TouchableOpacity>
              )}
              <Appbar.Content
                style={{marginLeft: Platform.OS === 'android' && 160}}
                title={
                  title && (
                    <MaterialCommunityIcons
                      style={{marginRight: 10}}
                      name="car"
                      size={20}
                      color={theme.colors.primary}
                    />
                  )
                }
                titleStyle={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: theme.colors.primary,
                }}
              />
            </Appbar.Header>

          )
        },
      }}
    >

      <Stack.Screen name='initial' component={BottomTabs} />

      <Stack.Screen name={route.ADD_VEHICLE} component={AddVehicles} />
    </Stack.Navigator>
  )
}

export default StackNavigationScreen;

const styles = StyleSheet.create({
    heading: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',

  }
})
