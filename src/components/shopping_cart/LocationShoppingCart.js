import {FlatList, StyleSheet, View} from 'react-native';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';

import {AppButton, AppText, Screen} from '../index';
import colors from '../../config/colors';
import DetailProduct from '../orders/DetailProduct';
import route from '../../navigations/route';
import React, {useState} from 'react';
import AppIcon from './AppIcon';
import AppModal from '../AppModal';
import AppMap from '../AppMap';

const LocationShoppingCart = ({detail}) => {
  const navigation = useNavigation();
  const [location, setLocation] = useState({
    region: {
      latitude: 14.0818,
      longitude: -87.20681,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    },
    marker: {
      latitude: 14.0818,
      longitude: -87.20681,
    },
  });

  //
  const onRegionChange = region => {
    setLocation({...location, region: region});
  };

  const onchangeMarker = coordinate => {
    setLocation({...location, marker: coordinate});
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.card}>
        <View style={styles.containerModal}>
          <View style={styles.details}>
            <AppText style={styles.textTitle}>Descripción</AppText>
            <AppText style={styles.textTitle}>Cantidad</AppText>
            <AppText style={styles.textTitle}>Precio</AppText>
          </View>
        </View>
        <FlatList
          style={styles.table}
          data={detail}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <DetailProduct item={item} index={index} flag={false} />
          )}
          keyExtractor={(item, index) => index.toString()}
          extraData={detail}
          //ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
      <View style={{flex: 1}}>
        <AppButton
          title="agregar ubicacion y proceder al pago"
          onPress={() => navigation.navigate(route.PAYMENT_METHOD)}
        />

        <View style={styles.location}>
          <AppMap location={location} setLocation={setLocation} />
        </View>
      </View>
    </Screen>
  );
};

export default LocationShoppingCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  card: {
    backgroundColor: colors.white,
  },
  containerModal: {
    backgroundColor: colors.light,
    padding: 10,
  },
  details: {
    width: 135,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 12,
  },
  location: {
    backgroundColor: '#dbdbdb',
    flex: 3,
    marginVertical: 5,
  },
  table: {margin: 10},
});
