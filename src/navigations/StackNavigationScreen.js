import { StyleSheet, TouchableOpacity } from "react-native";
import { DrawerActions, useTheme } from "@react-navigation/native";
import { Appbar } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";

import LogoHeader from "../components/LogoHeader";
import route from "./route";

import BottomTabs from "./BottomTabs";
import { AddVehicle, Order } from "../screen";
import colors from "../config/colors";

const Stack = createStackNavigator();

const StackNavigationScreen = () => {

  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        header: ({ options, navigation, back, route }) => {
          const title = options.headerTitle !== undefined
            ? options.headerTitle
            : options.title !== undefined
              ? options.title : route.name;

          return (
            <Appbar.Header theme={{ colors: { primary: theme.colors.background } }}>
              {back ? (
                <Appbar.BackAction
                  style={styles.back}
                  onPress={navigation.goBack}
                  color={colors.primary}
                />
              ) : (
                <TouchableOpacity
                  style={{ marginLeft: 10 }}
                  onPress={() => {
                    navigation.dispatch(DrawerActions.openDrawer());
                  }}>
                  <Icon name="align-left" size={25} color={colors.primary} />
                </TouchableOpacity>
              )}
              <Appbar.Content
                style={{ flexDirection: "row", justifyContent: "center" }}
                title={
                  title && (
                    <LogoHeader />
                  )
                }
                titleStyle={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: colors.primary,
                }}
              />
            </Appbar.Header>

          );
        },
      }}
    >

      <Stack.Screen name="initial" component={BottomTabs} />
      <Stack.Screen name={route.ORDER} component={Order} />
      <Stack.Screen name={route.ADD_VEHICLE} component={AddVehicle} />
    </Stack.Navigator>
  );
};

export default StackNavigationScreen;

const styles = StyleSheet.create({
  heading: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",

  },
});
