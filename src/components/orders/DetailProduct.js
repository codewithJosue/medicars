import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppText} from '../index';
import {useCallback, useEffect} from 'react';
import {details} from '../../data/detailProduct';

const DetailProduct = ({item, index, data, setDetail}) => {
  const increment = () => {
    const dataNew = data.map(a => {
      if (a.id === item.id) {
        if (a.cantidad >= 0 && a.precio >= 0) {
          a.cantidad = item.cantidad + 1;
          a.precio = item.precioInicial * a.cantidad;
        }
      }
      return a;
    });
    setDetail(dataNew);
  };

  const decrement = () => {
    const dataOld = data.map(a => {
      if (a.id === item.id) {
        if (a.cantidad > 0 && a.precio > 0) {
          a.cantidad = item.cantidad - 1;
          a.precio = item.precio - a.precioInicial;
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
          <TouchableOpacity onPress={() => decrement()}>
            <AppText style={{fontWeight: 'bold'}}>-</AppText>
          </TouchableOpacity>
          <AppText style={styles.text}>{item.cantidad}</AppText>
          <TouchableOpacity onPress={() => increment()}>
            <Text style={{fontWeight: 'bold'}}>+</Text>
          </TouchableOpacity>
        </View>
        <AppText style={[styles.text, {width: 40}]}>{item.precio}</AppText>
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
