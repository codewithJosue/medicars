import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppButton, AppText, Screen} from '../index';
import React, {useCallback, useContext, useRef, useState} from 'react';
import AppSelectList from '../AppSelectList';
import CardImage from '../CardImage';

import {aceites, marcas, vehicles} from '../../data/';
import {Badge} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from '../BottomSheet';
import colors from '../../config/colors';
import DetailProduct from './DetailProduct';
import Feather from 'react-native-vector-icons/Feather';
import {details} from '../../data/detailProduct';
import ShoppingCartContext from '../../contexts/shoppingCartContext';

const AddProduct = ({order: {title, image}, toasRef, toasRefError}) => {
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedOil, setSelectedOil] = useState('');
  const [dataDetail, setDataDetail] = useState(details);

  const {state, dispatch, setCartShopping} = useContext(ShoppingCartContext);

  const navigation = useNavigation();
  const ref = useRef(null);

  const onPress = useCallback(() => {
    if (state.length <= 0) {
      return toasRef.current.show(
        'debe agregar: vehículo, marca y aceite',
        3000,
      );
    }

    const isActive = ref?.current?.isActive();

    if (isActive) ref?.current?.scrollTo(0);

    ref?.current?.scrollTo(-500);
  }, [state]);

  const onSubmitDataVehicle = () => {
    if (selectedBrand === '' || selectedVehicle === '' || selectedOil === '') {
      return toasRefError.current.show('hay opciones sin seleccionar');
    }

    if (!state.some(e => e.vehicle_id === selectedVehicle)) {
      dispatch({
        type: 'ADD',
        payload: {
          selectedVehicle,
          selectedBrand,
          selectedOil,
          image,
          detail: dataDetail,
        },
      });

      toasRef.current.show('Se agrego correctamente', 3000);
    } else {
      toasRef.current.show(
        'Ya se encuentra registrada la información del vehículo',
        3000,
      );
    }
  };

  const total = dataDetail.reduce((n, {total}) => n + total, 0);

  const addCartShopping = async () => {
    if (state.some(v => v.vehicle_id === selectedVehicle)) {
      dispatch({type: 'UPDATE', payload: {selectedVehicle}});
      ref?.current?.scrollTo(0);
    }
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Screen style={styles.container}>
        <CardImage img={image} height={130} title={title} />
        <View style={{flex: 1, top: 10}}>
          <View
            style={{
              zIndex: 999,
            }}>
            <View style={{zIndex: 3}}>
              <AppSelectList
                placeholder="Seleccionar vehículo"
                data={vehicles}
                setSelected={setSelectedVehicle}
              />
            </View>
            <View style={{zIndex: 2}}>
              <AppSelectList
                placeholder="Seleccionar marca"
                data={marcas}
                setSelected={setSelectedBrand}
              />
            </View>
          </View>
          <View style={{zIndex: 1}}>
            <AppSelectList
              placeholder="Seleccionar Aceite"
              data={aceites}
              setSelected={setSelectedOil}
            />
          </View>

          <View style={styles.containerElements}>
            <View>
              <TouchableOpacity
                style={styles.itemsAdd}
                onPress={() => onPress()}>
                <Feather name="list" size={20} />
              </TouchableOpacity>
              <Badge style={styles.badge} size={15}>
                {state.length}
              </Badge>
            </View>

            <View style={{width: '40%'}}>
              <AppButton title="Agregar" onPress={onSubmitDataVehicle} />
            </View>
          </View>

          <View style={styles.footer}>
            <AppButton
              title="Seguir comprando"
              color="black"
              onPress={() => navigation.goBack()}
            />
            <View style={{margin: 10}} />
            <AppButton
              title="Ir al carrito"
              onPress={() => console.log('press')}
            />
          </View>
        </View>
      </Screen>
      <BottomSheet ref={ref}>
        <View style={{flex: 1, backgroundColor: colors.white}}>
          <View style={styles.containerModal}>
            <View style={styles.details}>
              <AppText style={styles.textTitle}>Descripción</AppText>
              <AppText style={styles.textTitle}>Cantidad</AppText>
              <AppText style={styles.textTitle}>Precio (Lps)</AppText>
            </View>
          </View>
          <FlatList
            style={{margin: 10}}
            data={dataDetail}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <DetailProduct
                item={item}
                index={index}
                data={dataDetail}
                setDetail={setDataDetail}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            extraData={dataDetail}
            //ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
        <View style={{flex: 1}}>
          <View style={styles.total}>
            <AppText style={{fontSize: 10}}>Total orden:</AppText>
            <AppText style={styles.totalPrice}>{`${total} lps`}</AppText>
          </View>
          <View style={styles.btnCar}>
            <AppButton
              title="añadir al carrito"
              // onPress={() => navigation.navigate(route.CART_SHOPPING, {detail})}
              onPress={() => addCartShopping()}
            />
          </View>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  btnCar: {
    alignSelf: 'flex-end',
    right: 20,
    bottom: 0,
  },
  badge: {
    backgroundColor: colors.primary,
    position: 'absolute',
    marginLeft: 10,
    top: -2,
    right: -10,
  },
  container: {
    flex: 1,
    margin: 20,
    marginTop: 0,
  },
  containerElements: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 10,
    backgroundColor: colors.light,
    borderRadius: 10,
    padding: 5,
  },
  footer: {
    flexDirection: 'row',
    width: '50%',
    position: 'absolute',
    bottom: 0,
    padding: 10,
  },
  containerModal: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 10,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemsAdd: {
    // backgroundColor: colors.white,
    // borderRadius: 25,
    top: 5,
    padding: 3,
  },
  textTitle: {
    //color: '#D3DBE2',
    color: '#46D0D9',
    fontSize: 12,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 1,
    marginBottom: 10,
    left: 15,
  },
  totalPrice: {
    fontSize: 10,
    padding: 2,
  },
  separator: {
    opacity: 0.1,
    height: 1,
    backgroundColor: '#182E44',
  },
});
