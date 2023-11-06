import {StyleSheet, View} from 'react-native';
import {AppText} from '../index';
import {useNavigation} from '@react-navigation/native';
import colors from '../../config/colors';
import {Badge} from 'react-native-paper';

const CardVehicle = ({vehicle, year, engine, index}) => {
  const {navigate} = useNavigation();

  return (
    <View style={{margin: 10, marginTop: 25}}>
      <Badge size={25} style={styles.badge}>
        {index + 1}
      </Badge>
      <View style={[styles.card]}>
        <View style={styles.details}>
          <View style={styles.row}>
            <AppText style={styles.title}>
              Vehículo:
              <AppText> {vehicle}</AppText>
            </AppText>
          </View>
          <View style={styles.row}>
            <AppText style={styles.title}>
              Año:
              <AppText> {year}</AppText>
            </AppText>
          </View>
          <View style={styles.row}>
            <AppText style={styles.title}>
              Motor:
              <AppText> {engine}</AppText>
            </AppText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardVehicle;

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    backgroundColor: colors.primary,
    color: colors.white,
    alignSelf: 'center',
    overflow: 'hidden',
    elevation: 2,
    width: 50,
    borderRadius: 5,
    top: -20,
  },
  card: {
    backgroundColor: colors.light,
    borderRadius: 5,
    elevation: 5,
  },
  details: {
    flexDirection: 'column',
    width: 100,
    justifyContent: 'space-between',
    padding: 10,
  },

  row: {
    flexDirection: 'row',
    width: 100,
  },
  title: {
    fontWeight: 'bold',
  },
});
