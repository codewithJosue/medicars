import React, {useState} from 'react';
import {Divider} from 'react-native-paper';
import {StyleSheet, Text, View} from 'react-native';
import * as Yup from 'yup';

import AppModal from '../../components/AppModal';
import colors from '../../config/colors';
import {AppText, Screen} from '../../components';
import {AppForm, AppFormField, SubmitButton} from '../../components/forms';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const validateSchema = Yup.object().shape({
  email: Yup.string()
    .required('Ingrese un email')
    .email('Ingrese un email válido.'),
});

const RecoverPassword = () => {
  const [isVisible, setIsVisible] = useState(false);

  const changePassword = value => {
    setIsVisible(!isVisible);
    console.log(isVisible);
  };

  return (
    <Screen style={styles.container}>
      <AppText style={styles.title}> Recuperar Contraseña</AppText>
      <AppText style={styles.subtitle}>
        Introduce el correo electrónico asociado a tu cuenta para cambiar tu
        contraseña.
      </AppText>

      <AppForm
        initialValues={{email: ''}}
        validationSchema={validateSchema}
        onSubmit={value => changePassword(value)}>
        <View>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            name="email"
            keyboardType="email-address"
            placeholder="Correo electronico"
            textContentType="password"
          />
          <AppModal isVisible={isVisible} setIsVisible={setIsVisible}>
            <AppText style={styles.titleModal}>
              Se enviaron instrucciones para poder restablecer su contraseña,
              favor seguir cada una de ellas y leer detenidamente el email.
            </AppText>

            <View style={styles.iconSuccess}>
              <Icon name="check-circle" size={100} color={colors.secondary} />
            </View>
          </AppModal>
        </View>
        <View style={styles.footer}>
          <AppText style={{bottom: 10}}>
            Comunícate con el
            <Text style={styles.soporte}> Soporte de Medicars</Text> si no
            tienes acceso
          </AppText>
          <Divider />
          <SubmitButton title="Recuperar contraseña" />
        </View>
      </AppForm>
    </Screen>
  );
};

export default RecoverPassword;

const styles = StyleSheet.create({
  container: {
    top: 10,
    margin: 20,
    flex: 1,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 30,
  },
  iconSuccess: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'center',
  },
  subtitle: {
    color: colors.black,
    textAlign: 'justify',
    margin: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: colors.primary,
    textAlign: 'center',
  },
  titleModal: {
    color: colors.black,
    textAlign: 'justify',
    fontWeight: 'bold',
    fontSize: 15,
  },
  soporte: {
    color: colors.blue,
    fontWeight: 'bold',
  },
});
