import Image, { Platform, StyleSheet, View } from "react-native";
import { DrawerActions, useTheme } from "@react-navigation/native";
import { Header, withBadge } from "@rneui/themed";
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

const image = require('../assets/logoApp.png');

import {Home, AddVehicles} from '../screen/';

const Stack = createStackNavigator();

const BadgedIcon = withBadge(1)(Icon);

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
                     rightComponent={()=> (
                       <>
                         <View style={{ position: 'absolute', top: -10, right:8 }}>
                           <BadgedIcon
                             type="ionicon"
                             name="ios-chatbubbles" />
                         </View>
                         <Icon name='shopping-cart' size={25} color='white' />
                       </>
                     )}
            >

            </Header>

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
