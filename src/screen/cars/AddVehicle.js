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
});

const AddVehicle = () => {
  const [brand, setBrand] = useState(null);
  const [vehicle, setVehicle] = useState(null);
  const [year, setYear] = useState(null);
  const [engine, setEngine] = useState(null);

  return (
    <Screen style={styles.screen}>
      <AppText style={styles.title}>Ingrese la información solicitada</AppText>
      <AppForm
        initialValues={{brand: ''}}
        onSubmit={value => register(value)}
        validationSchema={validationSchema}>
        <View style={{marginTop: 15}}>
          <AppDropDownPicker
            data={brandVehicles}
            setValue={setBrand}
            value={brand}
            iconName="car"
            placeholder="Seleccione la marca de su vehículo"
          />

          {/*<AppFormFieldPicker*/}
          {/*  data={data}*/}
          {/*  items={brandVehicles}*/}
          {/*  value={data.brand}*/}
          {/*  iconName="car"*/}
          {/*  placeholder="Seleccione la marca de su vehículo"*/}
          {/*  name="brand"*/}
          {/*/>*/}

          <AppDropDownPicker
            data={vehicles}
            setValue={setVehicle}
            value={vehicle}
            iconName="car"
            placeholder="Seleccione el tipo vehículo que posee"
          />

          <AppDropDownPicker
            data={years}
            setValue={setYear}
            value={year}
            iconName="calendar"
            placeholder="Seleccione un año"
          />

          <AppDropDownPicker
            data={engines}
            setValue={setEngine}
            value={engine}
            iconName="engine"
            placeholder="Seleccione el motor de su vehículo"
          />
        </View>
        <View style={styles.button}>
          <View style={{margin: 10}} />
          <SubmitButton
            title="Guardar"
            onpress={() => console.log('guardar')}
          />
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
