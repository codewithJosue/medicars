import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import route from '../../navigations/route';
import {AppText} from '../index';
import {useNavigation} from '@react-navigation/native';
import colors from '../../config/colors';

const CardVehicle = ({vehicle, year, engine}) => {
  const {navigate} = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigate(route.ORDER)}
      style={[styles.card]}>
      <View style={styles.container}>
        <View style={styles.row}>
          <AppText style={styles.title}>Vehículo: </AppText>
          <AppText>{vehicle}</AppText>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.row}>
            <AppText style={styles.title}>Año: </AppText>
            <AppText>{year}</AppText>
          </View>
          <View style={styles.row}>
            <AppText style={styles.title}>Motor: </AppText>
            <AppText>{engine}</AppText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardVehicle;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.light,
    borderRadius: 10,
    elevation: 1,
    marginTop: 10,
    overflow: 'hidden',
    width: '100%',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
  },
});
