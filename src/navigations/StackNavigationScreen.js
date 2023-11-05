import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {Appbar, Badge} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';

import LogoHeader from '../components/LogoHeader';
import route from './route';

import BottomTabs from './BottomTabs';
import {
  Vehicles,
  LocationShopping,
  ShoppingCart,
  Order,
  PaymentMethod,
  ChangePassword,
} from '../screen';
import colors from '../config/colors';
import {useContext} from 'react';
import ShoppingCartContext from '../contexts/shoppingCartContext';
import iconSize from '../config/iconSize';
import AppIcon from '../components/shopping_cart/AppIcon';

const Stack = createStackNavigator();

const StackNavigationScreen = () => {
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
                <TouchableOpacity
                  style={styles.left}
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <AppIcon name="chevron-left" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.left}
                  onPress={() => {
                    navigation.dispatch(DrawerActions.openDrawer());
                  }}>
                  <AppIcon name="menu" />
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
                  icon="cart-plus"
                  size={iconSize.medium}
                  color={colors.secondary}
                  onPress={() => navigation.navigate('cart_detail_shopping')}
                />
              </View>
            </Appbar.Header>
          );
        },
      }}>
      <Stack.Screen name="initial" component={BottomTabs} />
      <Stack.Screen name={route.CHANGE_PASSWORD} component={ChangePassword} />
      <Stack.Screen name={route.ORDER} component={Order} />
      <Stack.Screen name={route.ADD_VEHICLE} component={Vehicles} />
      <Stack.Screen
        name={route.LOCATION_SHOPPING}
        component={LocationShopping}
      />
      <Stack.Screen
        name={route.CART_DETAIL_SHOPPING}
        component={ShoppingCart}
      />
      <Stack.Screen name={route.PAYMENT_METHOD} component={PaymentMethod} />
    </Stack.Navigator>
  );
};

export default StackNavigationScreen;
const styles = StyleSheet.create({
  left: {
    marginLeft: 10,
  },
  containerBadge: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: colors.primary,
  },
});
