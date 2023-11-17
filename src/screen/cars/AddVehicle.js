import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText, Screen} from '../../components';
import colors from '../../config/colors';
import * as Yup from 'yup';
import {AppForm, SubmitButton} from '../../components/forms';
import AppDropDownPicker from '../../components/AppDropDownPicker';
import {brandVehicles, engines, vehicles, years} from '../../data';
import AppFormFieldPicker from '../../components/AppFormFieldPicker';

const validationSchema = Yup.object().shape({
  brand: Yup.string()
    .required('la marca del vehículo es requerida')
    .label('Marca'),
  vehicle: Yup.string().required('el vehículo es requerida').label('Vehiculo'),
  year: Yup.string().required('el año es obligatorio').label('Año'),
  engine: Yup.string()
    .required('seleccione el motor de su vehículo')
    .label('Motor'),
});

const AddVehicle = () => {
  const [dataForm, setDataForm] = useState({
    brand: null,
    vehicle: null,
    year: null,
    engine: null,
  });

  const addVehicle = value => {
    console.log('submit', value);
  };

  return (
    <Screen style={styles.screen}>
      <AppText style={styles.title}>Ingrese la información solicitada</AppText>
      <AppForm
        initialValues={dataForm}
        onSubmit={value => addVehicle(value)}
        validationSchema={validationSchema}>
        <View style={{marginTop: 15}}>
          <AppFormFieldPicker
            dataForm={dataForm}
            setDataForm={setDataForm}
            data={brandVehicles}
            value={dataForm.brand}
            iconName="car"
            placeholder="Seleccione la marca de su vehículo"
            name="brand"
          />

          <AppFormFieldPicker
            dataForm={dataForm}
            setDataForm={setDataForm}
            data={vehicles}
            value={dataForm.vehicle}
            iconName="car"
            placeholder="Seleccione el tipo vehículo que posee"
            name="vehicle"
          />

          <AppFormFieldPicker
            dataForm={dataForm}
            setDataForm={setDataForm}
            data={years}
            value={dataForm.year}
            iconName="calendar"
            placeholder="Seleccione el año de su vehículo"
            name="year"
          />

          <AppFormFieldPicker
            dataForm={dataForm}
            setDataForm={setDataForm}
            data={engines}
            value={dataForm.engine}
            iconName="engine"
            placeholder="Seleccione el motor"
            name="engine"
          />
        </View>
        <View style={styles.button}>
          <View style={{margin: 10}} />
          <SubmitButton title="Guardar" />
        </View>
      </AppForm>
    </Screen>
  );
};
export default AddVehicle;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 20,
  },
  title: {
    textAlign: 'left',
    fontSize: 18,
    color: colors.primary,
  },
  button: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
