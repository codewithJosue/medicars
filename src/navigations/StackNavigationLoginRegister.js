import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../config/colors";
//screens
import { LoginScreen, RegisterScreen } from "../screen/auth";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LogoHeader from "../components/LogoHeader";

const Stack = createStackNavigator();
const img = require("../assets/logoApp-icon.png");

const StackNavigationLoginRegister = () => {

  //const {colors} = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, //IOS
          elevation: 0, //Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          color: "#007dd7",
        },
      }}>
      <Stack.Screen
        name="login"
        options={{
          title: "",
          headerLeft: () => <LogoHeader />,
        }}
        component={LoginScreen}
      />

      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={({ navigation, route }) => ({
          title: "",
          headerLeft: () => (

            <>
              <View style={styles.containerBack}>
                <MaterialCommunityIcons
                  size={30}
                  style={styles.back}
                  name="keyboard-backspace"
                  onPress={() => navigation.goBack()}
                />
              </View>
            </>

          ),
          headerRight: () => (
            //<Image resizeMode="center" style={{ width: 120, height: 200 }} source={img} />
            <LogoHeader left={150} />
          ),
        })}
      />

    </Stack.Navigator>
  );
};

export default StackNavigationLoginRegister;

const styles = StyleSheet.create({
  containerBack: {
    marginLeft: 10,
    top: 10,
  },
  back: {
    color: "#c2c2c2",
    backgroundColor: "#fff",
    borderRadius: 14,
    elevation: 3,
  },
});
