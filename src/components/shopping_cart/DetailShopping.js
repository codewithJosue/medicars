import React, {useEffect, useState} from 'react';
import {AppText, Screen} from '../index';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {getCartShopping} from '../../storage/cartShopping';
import colors from '../../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import route from '../../navigations/route';

const DetailShopping = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getCartShopping().then(data => {
      setData(data);
    });
  }, []);

  console.log('DETAIL_SHOPPING', data);

  return (
    <Screen style={styles.container}>
      {data.map((cart, index) => {
        const {detail} = cart;
        // console.log('LOOP', detail);
        return (
          <View key={index} style={styles.containerCard}>
            <View style={styles.viewImage}>
              <Image
                resizeMode="cover"
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 8,
                }}
                source={cart.image}
              />
            </View>
            <View>
              <AppText style={styles.description}>
                <AppText style={styles.title}> vehículo: </AppText>
                {cart.vehicle}
              </AppText>
              <View style={styles.line} />
              <View>
                <AppText style={styles.description}>
                  <AppText style={styles.title}>Marca: </AppText>
                  {cart.brand}
                </AppText>
                <AppText style={styles.description}>
                  <AppText style={styles.title}> Aceite: </AppText>
                  {cart.oil}
                </AppText>
              </View>
              <View style={styles.line} />
            </View>
            <View style={styles.cardBodyBottom}>
              <TouchableOpacity
                style={styles.itemTextActiveContainer}
                onPress={() =>
                  navigation.navigate(route.CART_SHOPPING, {detail})
                }>
                <View>
                  {/*<AntDesign name="checkcircleo" size={20} />*/}
                  <AppText style={styles.textActive}>Detalle</AppText>
                </View>
              </TouchableOpacity>
              <MaterialCommunityIcons
                style={{color: '#fff', alignSelf: 'center'}}
                size={17}
                name="send-check"
              />
            </View>
          </View>
        );
      })}
    </Screen>
  );
};
export default DetailShopping;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCard: {
    flexDirection: 'row',
    borderRadius: 8,
    margin: 5,
    padding: 10,
    paddingBottom: 0,
    backgroundColor: '#fff',
    shadowOpacity: 0.14,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: {height: 0, width: 0},
    elevation: 2,
  },
  cardBodyBottom: {
    top: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    right: 10,
    position: 'absolute',
    backgroundColor: colors.primary,
    padding: 2,
    paddingHorizontal: 2,
    borderRadius: 20,
    height: 22,
  },
  description: {
    fontSize: 10,
    padding: 2,
  },
  itemTextActiveContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
  },
  line: {
    height: 1,
    backgroundColor: '#EBEBEB',
  },

  title: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  textActive: {
    paddingHorizontal: 8,
    color: '#3C3C3C',
    backgroundColor: '#fff',
    paddingVertical: 3,
    borderRadius: 20,
    fontSize: 9,
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
});
