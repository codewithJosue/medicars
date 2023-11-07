import React, {useState} from 'react';
import {Divider} from 'react-native-paper';
import {StyleSheet, Text, View} from 'react-native';
import * as Yup from 'yup';

import colors from '../../config/colors';
import {AppText, Screen} from '../../components';
import {AppForm, AppFormField, SubmitButton} from '../../components/forms';

const validateSchema = Yup.object().shape({
  email: Yup.string()
    .required('Ingrese un email')
    .email('Ingrese un email válido.'),
});

const RecoverPassword = () => {
  const changePassword = value => {};

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
        <View style={styles.form}>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            name="email"
            keyboardType="email-address"
            placeholder="Correo electronico"
            textContentType="password"
          />
        </View>
        <View style={styles.footer}>
          <AppText style={styles.supportMessage}>
            Comunícate con el
            <Text style={styles.support}> Soporte de Medicars</Text> si no
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
  form: {marginTop: 20},
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
  },
  iconSuccess: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'center',
  },
  subtitle: {
    color: colors.black,
    textAlign: 'justify',
    fontWeight: 'bold',
    fontSize: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: colors.primary,
    textAlign: 'left',
    marginBottom: 10,
  },
  titleModal: {
    color: colors.black,
    textAlign: 'justify',
    fontWeight: 'bold',
    fontSize: 15,
  },
  supportMessage: {
    bottom: 10,
    textAlign: 'center',
    fontSize: 12,
  },
  support: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
});
