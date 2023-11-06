import React, {useState} from 'react';
import {FAB} from 'react-native-paper';
import {Screen} from '../components';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {detailAddVehicles} from '../data/detailAddVehicle';
import colors from '../config/colors';
import CardVehicle from '../components/account/CardVehicle';

const Vehicles = props => {
  const [isExtended, setIsExtended] = useState(true);
  const [vehicles, setVehicles] = useState(detailAddVehicles);
  const [selected, setSelected] = useState('');

  return (
    <Screen style={styles.container}>
      <FlatList
        horizontal={false}
        data={vehicles}
        keyExtractor={listings => listings.id.toString()}
        renderItem={({item, index}) => (
          <CardVehicle
            vehicle={item.vehicle}
            year={item.year}
            engine={item.engine}
            index={index}
          />
        )}
      />
      <FAB
        icon="plus"
        customSize={45}
        animated={true}
        style={styles.fab}
        onPress={() => console.log('Pressed to')}
      />
    </Screen>
  );
};

export default Vehicles;

const {height} = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    margin: 15,
  },
  fab: {
    flex: 2,
    position: 'absolute',
    right: 0,
    bottom: 0,
    borderRadius: 24,
    backgroundColor: colors.light,
    margin: 16,
  },
});
