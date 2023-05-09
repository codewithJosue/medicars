import Image, { TouchableOpacity, Platform, View, Text, StyleSheet } from "react-native";
import { DrawerActions, useTheme } from "@react-navigation/native";
import { getHeaderTitle, HeaderBackButton, HeaderTitle } from "@react-navigation/elements";
import { Header } from '@rneui/themed';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import AvatarText from "../components/AvatarText";
const image = require('../assets/logoApp.png');

import {Home, AddVehicles} from '../screen/';

const Stack = createStackNavigator();

const HeaderLogo = () => (

    <Image resizeMode="cover" style={{
      width:150,
      height:36,
      resizeMode:"contain",
      alignSelf:'center',
      marginLeft: Platform.OS === "android" ? "50%" : "0%"
    }}
           source={image}
    />

)

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
            <Header backgroundColor='black' leftComponent={{
              icon: 'menu',
              color: '#fff',
              onPress: ()=> navigation.dispatch(DrawerActions.openDrawer())
            }} centerComponent={{text:"Medicars", style: styles.heading}}
                     rightComponent={{
                       icon: 'shopping-cart',
                       color: '#fff',
                     }}
            />

          )
        },
      }}
    >

      <Stack.Screen
        name="home"
        component={Home}

        />

      <Stack.Screen
        name="addVehicle"
        component={AddVehicles}
      />
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
