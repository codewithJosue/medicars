import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppButton, AppText, Screen} from '../index';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import AppSelectList from '../AppSelectList';
import CardImage from '../CardImage';

import {aceites, marcas, vehicles} from '../../data/';
import {Badge} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from '../BottomSheet';
import colors from '../../config/colors';
import {details} from '../../data/detailProduct';
import DetailProduct from './DetailProduct';

const AddProduct = ({order: {title, image}, toasRef, toasRefError}) => {
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedOil, setSelectedOil] = useState('');
  const [detail, setDetail] = useState(details);

  const [data, setData] = useState([]);

  const navigation = useNavigation();
  const ref = useRef(null);

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();

    if (isActive) ref?.current?.scrollTo(0);

    ref?.current?.scrollTo(-500);
  }, []);

  const onSubmitDataVehicle = () => {
    if (!data.some(e => e.vehicle === selectedVehicle)) {
      setData([
        ...data,
        {
          vehicle: selectedVehicle,
          brand: selectedBrand,
          oil: selectedOil,
          total: 0,
        },
      ]);

      toasRef.current.show('Se agrego correctamente', 3000);
    } else {
      toasRefError.current.show(
        'Ya se encuentra registrada la información del vehículo',
        3000,
      );
    }
  };

  const total = detail.reduce((n, {precio}) => n + precio, 0);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Screen style={styles.container}>
        <CardImage img={image} height={150} title={title} />
        <View
          style={{
            margin: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
            zIndex: 999,
          }}>
          <View style={{zIndex: 3}}>
            <AppSelectList
              placeholder="Seleccionar vehículo"
              data={vehicles}
              setSelected={setSelectedVehicle}
              width_max={false}
            />
          </View>
          <View style={{zIndex: 2}}>
            <AppSelectList
              placeholder="Seleccionar marca"
              data={marcas}
              setSelected={setSelectedBrand}
              width_max={false}
            />
          </View>
        </View>
        <View style={{marginLeft: 30, flexDirection: 'row', zIndex: 1}}>
          <AppSelectList
            placeholder="Seleccionar Aceite"
            data={aceites}
            setSelected={setSelectedOil}
            width_max={false}
          />
        </View>

        <View style={{alignSelf: 'flex-end', width: '40%', right: 20}}>
          <AppButton title="Agregar" onPress={onSubmitDataVehicle} />
        </View>

        <View style={{alignSelf: 'center', top: 40, width: '80%'}}>
          <TouchableOpacity
            style={{backgroundColor: 'white', borderRadius: 25, elevation: 2}}
            onPress={onPress}>
            <AppText style={{textAlign: 'center'}}>
              lista de elementos agregegados
            </AppText>
          </TouchableOpacity>
          <Badge
            style={{backgroundColor: 'black', right: 20, position: 'absolute'}}
            size={15}>
            {data.length}
          </Badge>
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
            data={detail}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <DetailProduct
                item={item}
                index={index}
                data={detail}
                setDetail={setDetail}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            extraData={detail}
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
              onPress={() => console.log('press')}
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
  container: {
    flex: 1,
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
