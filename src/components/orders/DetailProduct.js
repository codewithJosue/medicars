import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppText} from '../index';
import colors from '../../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import iconSize from '../../config/iconSize';

const DetailProduct = ({item, index, data, setDetail, flag = true}) => {
  const increment = () => {
    const dataNew = data.map(a => {
      if (a.id === item.id) {
        if (a.cantidad >= 0 && a.total >= 0) {
          a.cantidad = item.cantidad + 1;
          a.total = item.precio * a.cantidad;
        }
      }
      return a;
    });
    setDetail(dataNew);
  };

  const decrement = () => {
    const dataOld = data.map(a => {
      if (a.id === item.id) {
        if (a.cantidad > 0 && a.total > 0) {
          a.cantidad = item.cantidad - 1;
          a.total = item.total - a.precio;
        }
      }
      return a;
    });
    setDetail(dataOld);
  };

  return (
    <View style={styles.items}>
      <AppText style={[{width: 100}]}>{item.descripcion}</AppText>
      <View style={styles.counter}>
        {flag && (
          <Icon
            style={styles.icon}
            name="minus-thick"
            size={15}
            onPress={() => decrement()}
          />
        )}
        <AppText style={[styles.text, {marginLeft: 10, marginRight: -5}]}>
          {item.cantidad}
        </AppText>
        {flag && (
          <Icon
            style={styles.icon}
            name="plus"
            size={15}
            onPress={() => increment()}
          />
        )}
      </View>
      <AppText style={[styles.text, {width: 40}]}>{item.total}</AppText>
    </View>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  icon: {
    borderRadius: 25,
    backgroundColor: colors.secondary,
    color: colors.white,
    elevation: 1,
  },
  counter: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.white,
    width: 30,
    borderRadius: 5,
    padding: 5,
    right: 0,
    left: -35,
  },
  items: {
    backgroundColor: colors.white,
    elevation: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 11,
  },
});
