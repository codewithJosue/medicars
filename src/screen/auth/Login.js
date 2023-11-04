import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Yup from 'yup';

import {AppForm, AppFormField, SubmitButton} from '../../components/forms';
import {AppText, Screen} from '../../components';

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

const Login = () => {
  const navigation = useNavigation();

  const [eyePassword, setEyePassword] = useState(true);

  return (
    <Screen style={styles.container}>
      <View style={styles.containerLogo}>
        <AppText style={styles.title}>Medicars</AppText>
        <AppText style={styles.slogan}>
          Cuidamos la salud de tu vahículo
        </AppText>
      </View>
      <AppForm
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        <View style={{marginVertical: 10}}>
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
              color={eyePassword ? colors.grey_medium : colors.primary}
            />
          </View>
        </View>

        <SubmitButton title="Iniciar Sesión" />
        <TouchableOpacity
          style={{top: 10}}
          onPress={() => navigation.navigate('recover_password')}>
          <AppText style={styles.forgotPassword}>
            ¿Olvidaste tu contrasena?
          </AppText>
        </TouchableOpacity>
      </AppForm>
      <View style={styles.containerSocial}>
        <AppText style={styles.titleSocial}>O inicie sesión con: </AppText>
        <View style={styles.containerButton}>
          <IconButton
            icon="facebook"
            style={styles.social}
            iconColor={colors.primary}
            containerColor={colors.white}
            size={20}
            onPress={loginFacebook}
          />

          <IconButton
            icon="google-plus"
            style={styles.social}
            containerColor={colors.white}
            iconColor={colors.primary}
            size={20}
            onPress={loginGoogle}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('register')}>
          <AppText style={styles.register}>
            <AppText>No tiene una cuenta? </AppText> Registrese
          </AppText>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    margin: 20,
  },
  containerSocial: {
    marginTop: 30,
  },
  containerButton: {
    top: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  register: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  containerLogo: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  iconPass: {
    position: 'absolute',
    paddingTop: 20,
    right: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: colors.primary,
    alignSelf: 'center',
  },
  slogan: {
    color: colors.secondary,
    fontSize: 11,
    fontWeight: '200',
  },
  titleSocial: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  forgotPassword: {
    textAlign: 'right',
    fontWeight: 'bold',
    color: colors.primary,
  },
  social: {
    width: '50%',
    borderWidth: 0.5,
  },
});
