import {Text, Platform, View} from "react-native";
import {createStackNavigator} from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';


const Stack = createStackNavigator();

//screens
import {LoginScreen, RegisterScreen} from '../screen/auth';
//import colors from '../config/colors';

const NavigationLoginRegister = () => {

  const {colors} = useTheme();

  return (
    <Stack.Navigator screenOptions={{
      headerStyle : {
        backgroundColor: colors.background,
        shadowColor: colors.background, //IOS
        elevation: 0,
      },
      headerTintColor: colors.text,
      headerTitleStyle: {
        color: 'white',
      },
    }}>
      <Stack.Screen
        name="login"
        options={{
          title: '',
        }}
        component={LoginScreen}
      />

      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={{
          title: '',
          headerBackTitle: 'Atras',
        }}
      />

    </Stack.Navigator>
  )
}

export default NavigationLoginRegister;
