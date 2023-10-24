import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {DrawerActions, useTheme} from '@react-navigation/native';
import {Appbar, Badge} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import LogoHeader from '../components/LogoHeader';
import route from './route';

import BottomTabs from './BottomTabs';
import {
  AddVehicle,
  CartShopping,
  CartDetailShopping,
  Order,
  PaymentMethod,
} from '../screen';
import colors from '../config/colors';
import {useContext} from 'react';
import ShoppingCartContext from '../contexts/shoppingCartContext';
import iconSize from '../config/iconSize';

const Stack = createStackNavigator();

const StackNavigationScreen = () => {
  const theme = useTheme();

  const {state} = useContext(ShoppingCartContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'screen',
        header: ({options, navigation, back, route}) => {
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
              ? options.title
              : route.name;

          return (
            <Appbar.Header style={{backgroundColor: colors.white}}>
              {back ? (
                <Appbar.BackAction
                  containerColor={colors.white}
                  style={styles.back}
                  size={iconSize.small}
                  onPress={navigation.goBack}
                  color={colors.secondary}
                  mode="outlined"
                />
              ) : (
                <TouchableOpacity
                  style={{marginLeft: 10}}
                  onPress={() => {
                    navigation.dispatch(DrawerActions.openDrawer());
                  }}>
                  <Icon
                    name="bars"
                    size={iconSize.small}
                    color={colors.primary}
                  />
                </TouchableOpacity>
              )}
              <Appbar.Content
                style={{flexDirection: 'row', justifyContent: 'center'}}
                title={title && <LogoHeader />}
              />
              <View>
                <Badge
                  //visible={unread && unread > 0}
                  size={iconSize.badge}
                  style={styles.containerBadge}>
                  {state.length > 0 ? state.length : 0}
                </Badge>
                <Appbar.Action
                  icon="cart"
                  size={iconSize.small}
                  color={colors.primary}
                  onPress={() => navigation.navigate('cart_detail_shopping')}
                />
              </View>
            </Appbar.Header>
          );
        },
      }}>
      <Stack.Screen name="initial" component={BottomTabs} />
      <Stack.Screen name={route.ORDER} component={Order} />
      <Stack.Screen name={route.ADD_VEHICLE} component={AddVehicle} />
      <Stack.Screen name={route.CART_SHOPPING} component={CartShopping} />
      <Stack.Screen
        name={route.CART_DETAIL_SHOPPING}
        component={CartDetailShopping}
      />
      <Stack.Screen name={route.PAYMENT_METHOD} component={PaymentMethod} />
    </Stack.Navigator>
  );
};

export default StackNavigationScreen;
const styles = StyleSheet.create({
  back: {
    height: 25,
    borderWidth: 0.05,
    width: 25,
  },
  containerBadge: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: colors.secondary,
  },
});
