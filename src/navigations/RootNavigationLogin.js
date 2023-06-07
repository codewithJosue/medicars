import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../config/colors";
//screens
import { LoginScreen, RecoverPassword, RegisterScreen } from "../screen/auth";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LogoHeader from "../components/LogoHeader";

const Stack = createStackNavigator();
const img = require("../assets/logoApp-icon.png");

const RootNavigationLogin = () => {
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
          headerTitleAlign: "center",
          headerTitle: () => <LogoHeader />,
        }}
        component={LoginScreen}
      />

      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={({ navigation, route }) => ({
          title: "",
          headerTitleAlign: "center",
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
          headerTitle: () => <LogoHeader />,
        })}
      />
      <Stack.Screen
        name="recover_password"
        component={RecoverPassword}
        options={({ navigation, route }) => ({
          title: "",
          headerTitleAlign: "center",
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
          headerTitle: () => <LogoHeader />,
        })}
      />
    </Stack.Navigator>
  );
};

export default RootNavigationLogin;

const styles = StyleSheet.create({
  containerBack: {
    marginLeft: 10,
    top: 10,
  },
  back: {
    color: "#c2c2c2",
    backgroundColor: "#fff",
    borderRadius: 14,
    top: -7,
    elevation: 3,
  },
});
