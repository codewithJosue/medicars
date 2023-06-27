import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppText} from '../index';

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
    <>
      <View style={styles.itemDetails}>
        <AppText style={[{width: 120, fontSize: 10}]}>
          {item.descripcion}
        </AppText>
        <View style={styles.counter}>
          {flag && (
            <TouchableOpacity onPress={() => decrement()}>
              <AppText style={{fontWeight: 'bold'}}>-</AppText>
            </TouchableOpacity>
          )}
          <AppText style={styles.text}>{item.cantidad}</AppText>
          {flag && (
            <TouchableOpacity onPress={() => increment()}>
              <Text style={{fontWeight: 'bold'}}>+</Text>
            </TouchableOpacity>
          )}
        </View>
        <AppText style={[styles.text, {width: 40}]}>{item.total}</AppText>
      </View>
    </>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  counter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    width: 50,
    borderRadius: 5,
    left: -40,
  },
  itemDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 11,
  },
});
