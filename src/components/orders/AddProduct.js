import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppButton, AppText, Screen} from '../index';
import React, {useCallback, useContext, useRef, useState} from 'react';

import CardImage from '../CardImage';

import {aceites, brands, customerVehicle} from '../../data/';
import {Badge} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from '../BottomSheet';
import colors from '../../config/colors';
import DetailProduct from './DetailProduct';
import Feather from 'react-native-vector-icons/Feather';
import {details} from '../../data/detailProduct';
import ShoppingCartContext from '../../contexts/shoppingCartContext';
import iconSize from '../../config/iconSize';
import route from '../../navigations/route';
import AppDropDownPicker from '../AppDropDownPicker';

const AddProduct = ({order: {title, image}, toasRef, toasRefError}) => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedOil, setSelectedOil] = useState(null);
  const [dataDetail, setDataDetail] = useState(details);

  const {state, dispatch} = useContext(ShoppingCartContext);

  const navigation = useNavigation();
  const ref = useRef(null);

  const onPress = useCallback(() => {
    if (state.length > 0 && selectedVehicle === null) {
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
    if (
      selectedBrand === null ||
      selectedVehicle === null ||
      selectedOil === null
    ) {
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

  console.log(selectedBrand, selectedVehicle, selectedOil);
  return (
    <GestureHandlerRootView style={styles.root}>
      <Screen style={styles.container}>
        <CardImage img={image} height={150} title={title} />
        <View style={{flex: 1, marginTop: 20}}>
          <AppDropDownPicker
            data={customerVehicle}
            setValue={setSelectedVehicle}
            value={selectedVehicle}
            iconName="car-arrow-right"
            search={false}
            placeholder="Seleccione su vehículo"
          />

          <AppDropDownPicker
            data={brands}
            setValue={setSelectedBrand}
            value={selectedBrand}
            iconName="cursor-default-click"
            search={false}
            placeholder="Seleccione una marca del producto"
          />

          <AppDropDownPicker
            data={aceites}
            setValue={setSelectedOil}
            value={selectedOil}
            iconName="hydraulic-oil-level"
            search={false}
            placeholder="Seleccione una aceite para su vehículo"
          />

          <View style={styles.containerElements}>
            <View>
              <TouchableOpacity
                style={styles.itemsAdd}
                onPress={() => onPress()}>
                <Feather name="list" size={iconSize.medium} />
              </TouchableOpacity>
              <Badge style={styles.badge} size={iconSize.badge}>
                {state.length > 0 && selectedVehicle !== '' ? state.length : 0}
              </Badge>
            </View>

            <View style={{width: '40%'}}>
              <AppButton title="Agregar" onPress={onSubmitDataVehicle} />
            </View>
          </View>

          <View style={styles.footer}>
            <AppButton
              title="Seguir comprando"
              color="secondary"
              onPress={() => navigation.goBack()}
            />
            <View style={{margin: 10}} />
            <AppButton
              title="Terminar"
              onPress={() =>
                navigation.navigate(route.LOCATION_SHOPPING, {dataDetail})
              }
            />
          </View>
        </View>
      </Screen>
      <BottomSheet ref={ref}>
        <View style={styles.bottomSheet}>
          <View style={styles.containerModal}>
            <View style={styles.details}>
              <AppText style={styles.textTitle}>Descripción</AppText>
              <AppText style={styles.textTitle}>Cantidad</AppText>
              <AppText style={styles.textTitle}>Precio</AppText>
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
          />
        </View>

        <View style={styles.total}>
          <AppText style={styles.totalLabel}>Total orden:</AppText>
          <AppText style={styles.totalPrice}>{`${total} lps`}</AppText>
        </View>
        <View style={styles.btnCar}>
          <AppButton
            title="añadir al carrito"
            onPress={() => addCartShopping()}
          />
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  badge: {
    backgroundColor: colors.primary,
    position: 'absolute',
    marginLeft: 10,
    top: -2,
    right: -10,
  },
  bottomSheet: {
    backgroundColor: colors.white,
  },
  btnCar: {
    alignSelf: 'flex-end',
    top: 10,
    right: 20,
    bottom: 0,
    width: '40%',
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
  containerModal: {
    backgroundColor: colors.light,
    padding: 10,
  },
  details: {
    width: 160,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    flexDirection: 'row',
    width: '50%',
    position: 'absolute',
    bottom: 10,
    padding: 10,
  },
  itemsAdd: {
    top: 5,
    padding: 3,
  },
  root: {
    flex: 1,
  },
  textTitle: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 12,
  },
  total: {
    backgroundColor: colors.light,
    borderRadius: 5,
    padding: 10,
  },
  totalPrice: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 10,
    position: 'absolute',
  },
  totalLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.primary,
  },
});
