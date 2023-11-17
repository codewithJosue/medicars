import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StepIndicator from 'react-native-step-indicator';

import {AppButton, Screen} from '../../components';
import {AppForm, AppFormField, SubmitButton} from '../../components/forms';
import colors from '../../config/colors';

import customStyles from '../../config/customStyleSteps';

import defaultStyles from '../../config/styles';
import {brandVehicles, engines, vehicles, years} from '../../data';
import AppDropDownPicker from '../../components/AppDropDownPicker';
import AppIcon from '../../components/shopping_cart/AppIcon';
import AuthLoginContext from '../../contexts/authLoginContext';
import AppFormFieldPicker from '../../components/AppFormFieldPicker';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es requerido').label('Name'),
  email: Yup.string().required('El email es obligatorio').label('Email'),
  password: Yup.string()
    .required('La contraseña es obligatoria')
    .min(5, 'Minímo 5 caracteres')
    .label('Password'),
  brand: Yup.string()
    .required('la marca del vehículo es requerida')
    .label('Marca'),
  vehicle: Yup.string().required('el vehículo es requerida').label('Vehiculo'),
  year: Yup.string().required('el año es obligatorio').label('Año'),
  engine: Yup.string()
    .required('seleccione el motor de su vehículo')
    .label('Motor'),
});

const labels = ['Datos Personales', 'Datos del vehiculo'];

const Register = () => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikpvc3VlIEZsb3JlcyIsInRva2VuIjoxNTE2MjM5MDIyfQ.5a_MPpNHRrwylqkslF80kODVTSxgqtVR3dY3ylLEcns';
  const icons = ['account-question', 'car-back'];
  const [eyePassword, setEyePassword] = useState(true);
  const [currentPosition, setCurrentPosition] = useState(1);
  const [dataForm, setDataForm] = useState({
    name: 'Josue',
    lastName: 'Flores',
    phone: '32102897',
    email: 'josueari20@gmail.com',
    password: 'admin',
    passwordRepeat: '',
    brand: null,
    vehicle: null,
    year: null,
    engine: null,
  });

  const {signUp} = useContext(AuthLoginContext);

  const onChange_text = (e, type) => {
    setDataForm({
      ...dataForm,
      [type]: e.nativeEvent.text,
    });
  };

  useEffect(() => {}, [currentPosition]);

  const onPageChange = value => {
    setCurrentPosition(currentPosition + 1);
  };

  const backPageChange = () => {
    setCurrentPosition(1);
  };

  const register = value => {
    signUp({token: token, email: value.email});
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.containerStep}>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={currentPosition}
          labels={labels}
          renderStepIndicator={({position, stepstatus}) => (
            <AppIcon name={icons[position]} color={colors.primary} />
          )}
          stepCount={2}
        />
      </View>

      {currentPosition === 1 ? (
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentContainerStyle={{marginTop: 15}}>
          <AppForm
            initialValues={dataForm}
            onSubmit={value => {}}
            validationSchema={validationSchema}>
            <AppFormField
              autoCorrect={false}
              icon="account"
              name="name"
              value={dataForm.name}
              onChange={e => onChange_text(e, 'name')}
              placeholder="Nombres"
            />
            <AppFormField
              autoCorrect={false}
              icon="account"
              name="lastName"
              value={dataForm.lastName}
              onChange={e => onChange_text(e, 'lastName')}
              placeholder="Apellidos"
            />
            <AppFormField
              autoCorrect={false}
              icon="phone"
              name="phone"
              value={dataForm.phone}
              onChange={e => onChange_text(e, 'phone')}
              placeholder="Teléfono"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              value={dataForm.email}
              onChange={e => onChange_text(e, 'email')}
              textContentType="emailAddress"
            />
            <View>
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                name="password"
                placeholder="Contraseña"
                value={dataForm.password}
                onChange={e => onChange_text(e, 'password')}
                secureTextEntry={eyePassword}
                textContentType="password"
              />
              <Icon
                onPress={() => setEyePassword(!eyePassword)}
                style={styles.iconPass}
                name={eyePassword ? 'eye-off' : 'eye'}
                size={17}
                color={eyePassword ? colors.grey_medium : colors.primary}
              />
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                name="passwordRepeat"
                placeholder="Repetir contraseña"
                secureTextEntry={eyePassword}
                textContentType="password"
                value={dataForm.passwordRepeat}
                onChange={e => onChange_text(e, 'passwordRepeat')}
              />
              <Icon
                onPress={() => setEyePassword(!eyePassword)}
                style={styles.iconPass}
                name={eyePassword ? 'eye-off' : 'eye'}
                size={17}
                color={eyePassword ? colors.grey_medium : colors.primary}
              />
            </View>
            <View style={styles.btnNext}>
              <AppButton title="siguiente" onPress={() => onPageChange()} />
            </View>
          </AppForm>
        </ScrollView>
      ) : (
        <AppForm
          initialValues={dataForm}
          onSubmit={value => register(value)}
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
          <View style={styles.buttons}>
            <AppButton
              title="Atrás"
              color="danger"
              onPress={() => backPageChange()}
            />
            <View style={{margin: 10}} />
            <SubmitButton
              title="Guardar"
              onpress={() => console.log('guardar')}
            />
          </View>
        </AppForm>
      )}
    </Screen>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    margin: 20,
    flex: 1,
  },
  containerStep: {
    backgroundColor: colors.light,
    padding: 20,
    borderRadius: 10,
  },
  btnNext: {
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  iconPass: {
    position: 'absolute',
    paddingTop: 20,
    right: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    top: 20,
    alignSelf: 'center',
  },
  titleSelect: {
    color: colors.secondary,
    fontWeight: '200',
    marginLeft: 10,
  },
  buttons: {
    flexDirection: 'row',
    position: 'absolute',
    width: '45%',
    bottom: 0,
  },
  dropdownContainer: {
    backgroundColor: colors.light,
    width: '100%',
    borderRadius: 10,
  },
  dropdownContainerMin: {
    backgroundColor: colors.light,
    width: 165,
    borderRadius: 10,
  },
  dropdownContainerText: {
    width: 102,
    fontSize: 12,
  },
  inputStyle: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 5,
    flexDirection: 'row',
    width: '100%',
    padding: 0,
    marginVertical: 5,
  },
  containerMotorYear: {
    flexDirection: 'row',
    padding: 2,
    justifyContent: 'space-between',
    width: '42%',
  },
});
