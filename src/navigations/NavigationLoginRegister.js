import { StyleSheet } from "react-native";
import {createStackNavigator} from '@react-navigation/stack';
import { useTheme } from "@react-navigation/native";


const Stack = createStackNavigator();

//screens
import {LoginScreen, RegisterScreen} from '../screen/auth';
import { Header } from "@rneui/themed";

const NavigationLoginRegister = () => {

  const {colors} = useTheme();

  return (
    <Stack.Navigator  screenOptions={{
      headerMode:'screen',
      header: ({navigation,route})=> {
        if(route.name ==='login')
          return (
            <Header backgroundColor='black'
                    centerComponent={{text: "Medicars", style: styles.heading}}
            />
          )

        return (
          <Header backgroundColor='black' leftComponent={{
            icon: 'arrow-back',
            color: '#fff',
            onPress: ()=> navigation.dispatch(navigation.goBack())
          }} centerComponent={{text: "Medicars", style: styles.heading}}
          />
        )


      }
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

const styles = StyleSheet.create({

  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',

  }
})
