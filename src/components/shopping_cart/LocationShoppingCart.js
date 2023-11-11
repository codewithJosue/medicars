import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Linking,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {AppButton, AppText, Screen} from '../index';
import colors from '../../config/colors';
import DetailProduct from '../orders/DetailProduct';
import route from '../../navigations/route';
import AppMap from '../AppMap';
import AppIcon from './AppIcon';
import useCurrentGeolocation from '../../hooks/useCurrentGeolocation';
import AppLoading from '../notify/AppLoading';

const LocationShoppingCart = ({detail}) => {
  const navigation = useNavigation();

  const openSetting = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    } else {
      Linking.openSettings();
    }
  };

  const {region, marker, isLoading, hasError, setLocation} =
    useCurrentGeolocation();

  if (hasError) {
    return (
      <View style={styles.containerNotMap}>
        <View style={styles.iconNotMap}>
          <AppIcon name="map-marker-off" size={80} color={colors.danger} />
        </View>

        <AppText style={styles.oops}>
          Ooops! Permiso de ubicación no concedido.
        </AppText>

        <TouchableOpacity onPress={openSetting}>
          <AppText style={styles.btnConfiguration}>Ir a configuración</AppText>
        </TouchableOpacity>
      </View>
    );
  }

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
        />
      </View>

      <View style={styles.location}>
        {isLoading ? (
          <AppLoading />
        ) : (
          <AppMap location={region} marker={marker} setLocation={setLocation} />
        )}
      </View>
      <AppButton
        title="agregar ubicacion y proceder al pago"
        onPress={() => navigation.navigate(route.PAYMENT_METHOD)}
      />
    </Screen>
  );
};

export default LocationShoppingCart;

const styles = StyleSheet.create({
  btnConfiguration: {
    color: colors.primary,
    fontsize: 18,
    textAlign: 'center',
  },
  iconNotMap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    margin: 20,
  },
  card: {
    backgroundColor: colors.white,
  },
  containerNotMap: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 50,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  oops: {
    textAlign: 'center',
    fontsize: 18,
    fontWeight: 'bold',
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
    backgroundColor: colors.light,
    flex: 1,
    marginVertical: 5,
  },
  table: {margin: 10},
});
