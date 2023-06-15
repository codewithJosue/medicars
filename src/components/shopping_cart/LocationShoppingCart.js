import {FlatList, StyleSheet, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import {AppButton, AppText, Screen} from '../index';
import colors from '../../config/colors';
import React from 'react';
import DetailProduct from '../orders/DetailProduct';

const LocationShoppingCart = ({detail}) => {
  return (
    <Screen style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
          margin: 10,
          borderWidth: 0.3,
        }}>
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
            <DetailProduct item={item} index={index} flag={false} />
          )}
          keyExtractor={(item, index) => index.toString()}
          extraData={detail}
          //ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
      <View style={{flex: 2}}>
        <AppButton
          title="agregar ubicacion y proceder al pago"
          onPress={() => {}}
        />

        <View style={styles.location}>
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onPress={() => {}}
          />
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
  location: {
    backgroundColor: '#dbdbdb',
    flex: 3,
    marginVertical: 5,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
