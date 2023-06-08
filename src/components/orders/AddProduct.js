import {StyleSheet, View} from 'react-native';
import {AppButton, Screen} from '../index';
import {useState} from 'react';
import AppSelectList from '../AppSelectList';
import CardImage from '../CardImage';

const vehicles = [
  {key: '1', value: 'Corolla 2008'},
  {key: '2', value: 'Mazda GT'},
];
const marcas = [
  {key: '1', value: 'Castrol'},
  {key: '2', value: 'Elf'},
  {key: '3', value: 'Penzoil'},
];

const aceites = [
  {key: '1', value: 'Aceite Supertech 25W60 Mineral Gl'},
  {key: '2', value: 'Aceite Pennzoil Para Motor Gasolina 10W30 5 - 1Qt'},
];

const AddProduct = ({order: {title, image}}) => {
  const [selected, setSelected] = useState([]);

  return (
    <Screen style={styles.container}>
      <CardImage img={image} height={150} />
      <View
        style={{
          margin: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View style={{zIndex: 1}}>
          <AppSelectList
            placeholder="Seleccionar vehículo"
            data={vehicles}
            setSelected={setSelected}
            width_max={false}
          />
        </View>
        <AppSelectList
          placeholder="Seleccionar marca"
          data={marcas}
          setSelected={setSelected}
          width_max={false}
        />
      </View>
      <View style={{marginLeft: 20, flexDirection: 'row'}}>
        <AppSelectList
          placeholder="Seleccionar Aceite"
          data={aceites}
          setSelected={setSelected}
          width_max={false}
        />
      </View>
      <View style={styles.footer}>
        <AppButton title="Agregar" onPress={() => console.log('press')} />
      </View>
    </Screen>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    width: '50%',
    bottom: 0,
    alignSelf: 'flex-end',
    right: 10,
  },
});
