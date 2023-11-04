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
      />
      {state.length > 0 ? (
        state.map((cart, index) => {
          const {detail} = cart;
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(route.LOCATION_SHOPPING, {detail})
              }
              key={index}
              style={styles.containerCard}>
              <View style={styles.viewImage}>
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={cart.image}
                />
              </View>
              <View style={{marginVertical: 5}}>
                <AppText style={styles.description}>
                  <AppText style={styles.title}>Vehículo: </AppText>
                  {cart.vehicle}
                </AppText>
                <View>
                  <AppText style={styles.description}>
                    <AppText style={styles.title}>Marca: </AppText>
                    {cart.brand}
                  </AppText>
                  <AppText style={styles.description}>
                    <AppText style={styles.title}>Aceite: </AppText>
                    {cart.oil}
                  </AppText>
                </View>
              </View>
              <View style={styles.cardBodyBottom}>
                <TouchableOpacity style={styles.itemTextActiveContainer}>
                  <View>
                    <MaterialCommunityIcons
                      name="trash-can"
                      size={25}
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
              </View>
            </TouchableOpacity>
          );
        })
      ) : (
        <View style={styles.cartOf}>
          <MaterialCommunityIcons
            style={styles.iconCartOf}
            name="emoticon-sad"
            size={50}
          />
          <AppText style={styles.textCartOf}>
            No hay ningún servicio o producto en el carrito
          </AppText>
          <View style={{top: 20}}>
            <AppButton
              title="ir al inicio"
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
  container: {
    flex: 1,
    margin: 10,
  },
  containerCard: {
    flexDirection: 'row',
    borderRadius: 5,
    margin: 5,
    padding: 10,
    paddingBottom: 0,
    backgroundColor: '#fff',
    shadowOpacity: 0.14,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: {height: 0, width: 0},
    elevation: 3,
  },
  cardBodyBottom: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    right: 5,
    position: 'absolute',
    backgroundColor: colors.light,
    padding: 2,
    paddingHorizontal: 2,
    borderRadius: 20,
    height: 30,
    width: 30,
  },
  cartOf: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  textCartOf: {
    top: 10,
    fontSize: 14,
    textAlign: 'center',
  },
  iconCartOf: {
    textAlign: 'center',
    color: colors.danger,
  },
  description: {
    padding: 2,
    fontSize: 11,
    fontStyle: 'italic',
    fontWeight: '200',
  },
  itemTextActiveContainer: {
    backgroundColor: colors.white,
    borderRadius: 30,
    overflow: 'hidden',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  textActive: {
    paddingHorizontal: 8,
    color: '#3C3C3C',
    backgroundColor: '#fff',
    paddingVertical: 3,
    borderRadius: 20,
    fontSize: 12,
  },
  viewImage: {
    marginRight: 15,
    marginVertical: 10,
  },
  viewDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },
  footer: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 10,
  },
});
