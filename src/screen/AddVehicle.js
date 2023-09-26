import React, {useState} from 'react';
import {
  Button,
  DataTable,
  IconButton,
  FAB,
  AnimatedFAB,
  Divider,
} from 'react-native-paper';
import {AppText, Screen} from '../components';
import {StyleSheet, View} from 'react-native';
import {detailAddVehicles} from '../data/detailAddVehicle';
import colors from '../config/colors';

const AddVehicle = props => {
  const [isExtended, setIsExtended] = useState(true);
  const [vehicles, setVehicles] = useState(detailAddVehicles);
  const [selected, setSelected] = useState('');

  return (
    <Screen style={styles.container}>
      <FAB
        icon="plus"
        customSize={30}
        animated={true}
        style={styles.fabStyle}
        onPress={() => console.log('Pressed')}
      />
      <AppText style={styles.title}>
        Información de los vehículos registrados
      </AppText>
      <DataTable style={{top: 10}}>
        <DataTable.Header style={styles.header}>
          <DataTable.Title textStyle={styles.header}>Marca</DataTable.Title>
          <DataTable.Title textStyle={styles.header}>Modelo</DataTable.Title>
          <DataTable.Title textStyle={styles.header}>Año</DataTable.Title>
          <DataTable.Title textStyle={styles.header}>Motor</DataTable.Title>
          <DataTable.Title textStyle={styles.header}>Acciones</DataTable.Title>
        </DataTable.Header>

        {vehicles.map((vehicle, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell textStyle={styles.rows}>
              {vehicle.vehicle}
            </DataTable.Cell>
            <DataTable.Cell textStyle={styles.rows}>
              {vehicle.brand}
            </DataTable.Cell>
            <DataTable.Cell textStyle={styles.rows}>
              {vehicle.year}
            </DataTable.Cell>
            <DataTable.Cell textStyle={styles.rows}>
              {vehicle.engine}
            </DataTable.Cell>
            <View style={styles.options}>
              <IconButton
                size={10}
                iconColor={colors.secondary}
                icon="pencil"
                onPress={() => console.log('Update')}
              />
              <IconButton
                size={10}
                icon="delete"
                iconColor={colors.primary}
                onPress={() => console.log('Delete')}
              />
            </View>
          </DataTable.Row>
        ))}
      </DataTable>
    </Screen>
  );
};

export default AddVehicle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  fabStyle: {
    bottom: 16,
    right: 10,
    position: 'absolute',
    backgroundColor: colors.light,
  },
  header: {
    fontSize: 8,
    color: colors.secondary,
  },
  options: {
    flexDirection: 'row',
  },
  rows: {
    fontSize: 7,
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.black,
    top: 5,
  },
});
