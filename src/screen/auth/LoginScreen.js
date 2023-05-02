import { useState } from "react";
import {Image, StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../../components/forms";
import { AppText, Screen, AppButton } from "../../components";

import colors from "../../config/colors";


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Ingrese una dirección de correo")
    .email("Dirección de correo inválida")
    .label("Email"),
  password: Yup.string()
    .required("Ingrese su contraseña")
    .min(4, "Debe ingresar 4 caracteres como mínimo")
    .label("Password"),
})

const LoginScreen = () => {
  const logo = require("../../assets/logoApp.png");
  const [eyePassword, setEyePassword] = useState(true);
  return (
    <Screen style={styles.container}>
      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={logo} />
        <AppText style={styles.text}>Inicio de Sesion</AppText>
      </View>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          keyboardType="email-address"
          placeholder="Correo electronico"
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
            name={eyePassword ? "eye-off" : "eye"}
            size={25}
            color={eyePassword ? colors.medium : colors.secondary}
          />
        </View>

        <SubmitButton title="Inicio de Sesión" />

        <AppText style={styles.forgoutPass}>Olvidaste tu contrasena?</AppText>
      </AppForm>

      <View style={styles.containerSocial}>
        <Text style={styles.containerSocialTitle}> Iniciar sesión con redes sociales </Text>
        <View style={styles.facebook}>
          <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
            style={styles.btnFacebook}
          >
            Iniciar sesión con Facebook
          </Icon.Button>
        </View>
        <View>
          <Icon.Button
            name="google"
            color={colors.black}
            backgroundColor={colors.white}
            style={styles.btnGoogle}
          >
            Iniciar sesión con Google
          </Icon.Button>
        </View>
      </View>
      <AppButton title="Registrate" color="secondary" onpress={()=> console.log("hi")} />
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  containerLogo: {
    alignSelf: "center",
    marginTop: 0,
    marginBottom: 20,
  },
  containerIconPass: {
    justifyContent: "center",
  },
  iconPass: {
    position: "absolute",
    paddingTop:15,
    paddingRight:15,
    right: 0,
  },
  logo: {
    height: 100,
    width: 310,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    top:20,
    alignSelf:"center"
  },
  forgoutPass: {
    textAlign: "right",
    color: colors.secondary,
    marginBottom:20,
  },
  btnFacebook:{
    justifyContent:'center',
  },
  containerSocial: {
    backgroundColor:colors.light,
    padding:20,
  },
  facebook: {
    marginVertical:10,
  },
  btnGoogle: {
    justifyContent:'center',
  },
  containerSocialTitle:{
    position:"absolute",
    //fontWeight:"bold",
    alignSelf:"center",
  }

});


