import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Yup from 'yup';

import {AppForm, AppFormField, SubmitButton} from '../../components/forms';
import {AppButton, AppText, Screen} from '../../components';

import colors from '../../config/colors';
import {fbAuth} from '../../helpers/loginFacebook';
import {signIn} from '../../helpers/loginGoogle';
import {IconButton} from 'react-native-paper';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Ingrese una dirección de correo')
    .email('Dirección de correo inválida')
    .label('Email'),
  password: Yup.string()
    .required('Ingrese su contraseña')
    .min(4, 'Debe ingresar 4 caracteres como mínimo')
    .label('Password'),
});

const loginFacebook = async () => {
  const data = await fbAuth();
  console.log('FACEBOOK', data);
};

const loginGoogle = async () => {
  const data = await signIn();
  console.log('GOOGLE', data);
};

const LoginScreen = () => {
  const navigation = useNavigation();

  const [eyePassword, setEyePassword] = useState(true);

  return (
    <Screen style={styles.container}>
      <View style={styles.containerLogo}>
        <AppText style={styles.text}>Medicars</AppText>
      </View>
      <AppForm
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        <View style={{marginBottom: 5}}>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            name="email"
            keyboardType="email-address"
            placeholder="Correo electrónico"
            textContentType="password"
          />
          <View>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Contraseña"
              secureTextEntry={eyePassword}
              textContentType="password"
            />
            <Icon
              onPress={() => setEyePassword(!eyePassword)}
              style={styles.iconPass}
              name={eyePassword ? 'eye-off' : 'eye'}
              size={17}
              color={eyePassword ? colors.medium : colors.secondary}
            />
          </View>
        </View>

        <SubmitButton title="Inicio de Sesión" />
        <TouchableOpacity
          onPress={() => navigation.navigate('recover_password')}>
          <AppText style={styles.forgotPassword}>
            Olvidaste tu contrasena ?
          </AppText>
        </TouchableOpacity>
      </AppForm>
      <View style={{marginTop: 20}}>
        <AppText style={styles.titleSocial}>O inicie sesión con: </AppText>
        <View style={styles.containerSocial}>
          <IconButton
            icon="facebook"
            style={styles.social}
            iconColor={colors.darkBlue}
            containerColor={colors.white}
            size={20}
            onPress={loginFacebook}
          />

          <IconButton
            icon="google-plus"
            style={styles.social}
            containerColor={colors.white}
            iconColor={colors.darkBlue}
            size={20}
            onPress={loginGoogle}
          />
        </View>
      </View>

      <View style={styles.containerFooter}>
        <AppText>No tiene una cuenta? </AppText>
        <TouchableOpacity
          style={{top: 0}}
          onPress={() => navigation.navigate('register')}>
          <AppText style={{color: colors.primary, fontWeight: 'bold'}}>
            Registrese
          </AppText>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    margin: 20,
  },
  containerSocial: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerFooter: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: 10,
  },
  containerLogo: {
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  iconPass: {
    position: 'absolute',
    paddingTop: 15,
    paddingRight: 15,
    right: 0,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    top: 10,
    alignSelf: 'center',
  },
  titleSocial: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  forgotPassword: {
    textAlign: 'right',
    fontWeight: 'bold',
    color: colors.black,
  },
  social: {
    width: '50%',
    borderWidth: 0.5,
  },
});
