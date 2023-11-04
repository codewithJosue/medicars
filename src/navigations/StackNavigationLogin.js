import {StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import colors from '../config/colors';
//screens
import {Login, RecoverPassword, Register} from '../screen/auth';
import LogoHeader from '../components/LogoHeader';
import AppIcon from './AppIcon';

const Stack = createStackNavigator();
const StackNavigationLogin = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.white,
          shadowColor: colors.light, //IOS
          elevation: 0, //Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          color: '#007dd7',
        },
      }}>
      <Stack.Screen
        name="login"
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerTitle: () => <LogoHeader />,
        }}
        component={Login}
      />

      <Stack.Screen
        name="register"
        component={Register}
        options={({navigation, route}) => ({
          title: '',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <View style={styles.back}>
              <AppIcon
                name="chevron-left"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
          headerTitle: () => <LogoHeader />,
        })}
      />
      <Stack.Screen
        name="recover_password"
        component={RecoverPassword}
        options={({navigation, route}) => ({
          title: '',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <>
              <View style={styles.back}>
                <AppIcon
                  name="chevron-left"
                  onPress={() => navigation.goBack()}
                />
              </View>
            </>
          ),
          headerTitle: () => <LogoHeader />,
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigationLogin;

const styles = StyleSheet.create({
  back: {
    height: 30,
    width: 30,
    marginLeft: 10,
  },
});
