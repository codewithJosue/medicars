import React, {useContext, useState} from 'react';
import {AppButton, AppText, Screen} from '../index';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import colors from '../../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import route from '../../navigations/route';
import ShoppingCartContext from '../../contexts/shoppingCartContext';
import AppDialog from '../notify/AppDialog';
import {Divider} from 'react-native-paper';
import {shoppingCartSum} from '../../helpers/shoppingCartSum';

const DetailShopping = () => {
  const navigation = useNavigation();

  const {state, dispatch} = useContext(ShoppingCartContext);
  const [isVisible, setIsVisible] = useState(false);
  const [onPress, setOnPress] = useState(null);

  //console.log('CART SHOPPING DETAIL', state);

  const resetCartShopping = () => {
    dispatch({type: 'REMOVE', payload: []});
  };

  const deleteCartShoppingId = id => {
    dispatch({type: 'REMOVE_ID', payload: {id}});
  };

  return (
    <Screen style={styles.container}>
      <AppDialog
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        onPress={onPress}
        title="¿Desea eliminar?"
      />
      {state.length > 0 ? (
        state.map((cart, index) => {
          const {detail} = cart;
          const str = [];
          detail.map(d => {
            if (d.cantidad >= 1) str.push(d.descripcion);
          });

          const total = shoppingCartSum(detail);
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(route.LOCATION_SHOPPING, {detail})
              }
              key={index}
              style={styles.containerCard}>
              <Image
                resizeMode="cover"
                style={styles.image}
                source={cart.image}
              />

              <View>
                <AppText style={styles.brand}>{cart.brand}</AppText>
                <AppText style={styles.oil}>
                  {cart.oil.length > 40
                    ? `${cart.oil.substring(0, 35)}...`
                    : cart.oil.substring(0, 35)}
                </AppText>
                <AppText style={styles.services}>
                  {str.length > 40
                    ? `${str.toString().substring(0, 40)}...`
                    : str.toString().substring(0, 40)}
                </AppText>

                <AppText style={styles.price}>
                  L{total} |
                  <AppText style={styles.price}>
                    {' '}
                    {str.length} servicios
                  </AppText>
                </AppText>
              </View>
              <View style={styles.cardBodyBottom}>
                <MaterialCommunityIcons
                  name="close"
                  size={20}
                  onPress={() => {
                    setIsVisible(!isVisible);
                    setOnPress(
                      () => () => deleteCartShoppingId(cart.vehicle_id),
                    );
                  }}
                  color={colors.danger}
                />
              </View>
            </TouchableOpacity>
          );
        })
      ) : (
        <View style={styles.cartOf}>
          <MaterialCommunityIcons
            style={styles.iconCartOf}
            name="cart-off"
            size={100}
          />
          <AppText style={styles.textCartOf}>
            No hay ningún servicio o producto en el carrito.
          </AppText>
          <View style={{top: 20}}>
            <AppButton
              title="Agregar servicios o productos"
              onPress={() => navigation.navigate(route.HOME)}
            />
          </View>
        </View>
      )}

      {state.length > 0 ? (
        <View style={styles.footer}>
          <AppButton
            title="Limpiar carrito"
            onPress={() => {
              setIsVisible(!isVisible);
              setOnPress(() => () => resetCartShopping());
            }}
          />
        </View>
      ) : null}
    </Screen>
  );
};
export default DetailShopping;

const styles = StyleSheet.create({
  brand: {
    fontSize: 14,
    fontWeight: '800',
  },
  cardBodyBottom: {
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: colors.light,
    alignItems: 'center',
    paddingTop: 2,
    right: 5,
    position: 'absolute',
    height: 25,
    width: 25,
  },

  cartOf: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: colors.white,
  },
  containerCard: {
    flexDirection: 'row',
    borderRadius: 5,
    margin: 10,
    backgroundColor: colors.white,
    shadowOpacity: 0.14,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: {height: 0, width: 0},
    elevation: 3,
  },
  footer: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 10,
  },
  iconCartOf: {
    textAlign: 'center',
    color: colors.secondary,
  },
  image: {
    marginRight: 15,
    marginVertical: 10,
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  oil: {
    fontSize: 13,
    fontWeight: '600',
  },
  price: {
    color: colors.grey_medium,
    fontSize: 11,
    fontWeight: '200',
  },
  services: {
    fontWeight: '400',
    fontSize: 12,
  },
  textCartOf: {
    top: 10,
    fontSize: 14,
    textAlign: 'center',
  },
  viewImage: {
    marginRight: 15,
    marginVertical: 10,
  },
});
