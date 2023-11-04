import {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StepIndicator from 'react-native-step-indicator';

import {AppButton, Screen} from '../../components';
import {AppForm, AppFormField, SubmitButton} from '../../components/forms';
import colors from '../../config/colors';

import customStyles from '../../config/customStyleSteps';

import defaultStyles from '../../config/styles';
import AppSelectList from '../../components/forms/AppSelectList';
import {brandVehicles, engine, vehicles, year} from '../../data';
import iconSize from '../../config/iconSize';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es requerido').label('Name'),
  email: Yup.string().required('El email es obligatorio').label('Email'),
  password: Yup.string()
    .required('La contraseña es obligatoria')
    .min(5, 'Minímo 5 caracteres')
    .label('Password'),
});

const labels = ['Datos Personales', 'Datos del vehiculo'];

const Register = () => {
  const [eyePassword, setEyePassword] = useState(true);
  const [currentPosition, setCurrentPosition] = useState(1);
  const [form, setForm] = useState(true);
  const [data, setData] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    passwordRepeat: '',
  });

  const [selected, setSelected] = useState('');

  const onChange_text = (e, type) => {
    setData({
      ...data,
      [type]: e.nativeEvent.text,
    });
  };

  useEffect(() => {}, [currentPosition]);

  const onPageChange = value => {
    setForm(false);
    setCurrentPosition(currentPosition + 1);
  };

  const backPageChange = value => {
    setCurrentPosition(0);
    setForm(true);
  };

  const icons = ['account-question', 'car-back'];

  //keyboardShouldPersistTaps="always"
  return (
    <Screen style={styles.container}>
      <View style={styles.containerStep}>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={currentPosition}
          labels={labels}
          renderStepIndicator={({position, stepstatus}) => (
            <Icon
              name={icons[position]}
              size={iconSize.medium}
              color={colors.primary}
            />
          )}
          stepCount={2}
        />
      </View>

      {form ? (
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentContainerStyle={{marginTop: 15}}>
          <AppForm
            initialValues={data}
            onSubmit={value => onPageChange(value)}
            validationSchema={validationSchema}>
            <AppFormField
              autoCorrect={false}
              icon="account"
              name="name"
              value={data.name}
              onChange={e => onChange_text(e, 'name')}
              placeholder="Nombres"
            />
            <AppFormField
              autoCorrect={false}
              icon="account"
              name="lastName"
              value={data.lastName}
              onChange={e => onChange_text(e, 'lastName')}
              placeholder="Apellidos"
            />
            <AppFormField
              autoCorrect={false}
              icon="phone"
              name="phone"
              value={data.phone}
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
              value={data.email}
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
                value={data.password}
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
                value={data.passwordRepeat}
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
              <SubmitButton title="siguiente" />
            </View>
          </AppForm>
        </ScrollView>
      ) : (
        <AppForm
          initialValues={data}
          onSubmit={value => backPageChange(value)}
          validationSchema={validationSchema}>
          <View style={{flex: 1, marginTop: 15}}>
            <AppSelectList
              placeholder="Seleccione la marca"
              setSelected={setSelected}
              data={brandVehicles}
              iconName="car-2-plus"
            />

            <View>
              <AppSelectList
                placeholder="Seleccione el modelo"
                setSelected={setSelected}
                data={vehicles}
                iconName="car-3-plus"
              />
            </View>

            <View>
              <AppSelectList
                placeholder="Seleccione el año"
                setSelected={setSelected}
                data={year}
                iconName="calendar-range"
              />
            </View>

            <View>
              <AppSelectList
                placeholder="Seleccione el motor"
                setSelected={setSelected}
                data={engine}
                iconName="engine"
              />
            </View>

            {/*<TextInput placeholder="Observaciones" multiline={true} />*/}
          </View>
          <View style={styles.buttons}>
            <SubmitButton title="Atrás" color="danger" />
            <View style={{margin: 10}} />
            <AppButton title="Guardar" onpress={() => console.log('guardar')} />
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
