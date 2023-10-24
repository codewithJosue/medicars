import React, {useState} from 'react';
import {FAB} from 'react-native-paper';
import {Screen} from '../components';
import {FlatList, StyleSheet, View} from 'react-native';
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
        style={styles.screen}
        data={vehicles}
        keyExtractor={listings => listings.id.toString()}
        renderItem={({item}) => (
          <CardVehicle
            vehicle={item.vehicle}
            year={item.year}
            engine={item.engine}
          />
        )}
      />

      <FAB
        icon="plus"
        customSize={30}
        animated={true}
        style={styles.fab}
        onPress={() => console.log('Pressed to')}
      />
    </Screen>
  );
};

export default Vehicles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
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
