import {StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import colors from '../config/colors';
//screens
import {Login, RecoverPassword, Register} from '../screen/auth';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LogoHeader from '../components/LogoHeader';
import iconSize from '../config/iconSize';

const Stack = createStackNavigator();
const img = require('../assets/logoApp-icon.png');

const StackNavigationLogin = () => {
  //const {colors} = useTheme();

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
              <MaterialCommunityIcons
                size={iconSize.small}
                color={colors.secondary}
                name="keyboard-backspace"
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
                <MaterialCommunityIcons
                  size={iconSize.small}
                  color={colors.secondary}
                  name="keyboard-backspace"
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
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 24,
    borderWidth: 0.05,
    height: 25,
    marginLeft: 10,
    padding: 2,
    width: 25,
  },
});
