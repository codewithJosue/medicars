import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../../components/forms";
import { AppButton, AppText, Screen } from "../../components";

import colors from "../../config/colors";
import { fbAuth } from "../../helpers/loginFB";


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Ingrese una dirección de correo")
    .email("Dirección de correo inválida")
    .label("Email"),
  password: Yup.string()
    .required("Ingrese su contraseña")
    .min(4, "Debe ingresar 4 caracteres como mínimo")
    .label("Password"),
});

const login = async () => {

  const data = await fbAuth();

  console.log(data);
};

const LoginScreen = () => {

  const navigation = useNavigation();

  const logo = require("../../assets/logoApp.png");
  const [eyePassword, setEyePassword] = useState(true);

  return (
    <Screen style={styles.container}>
      <View style={styles.containerLogo}>
        {/*<Image style={styles.logo} source={logo} />*/}
        <AppText style={styles.text}>Inicio de Sesión</AppText>
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
      </View>
      <View style={styles.accounts}>

        <View>
          <Icon.Button
            onPress={login}
            name="facebook"
            backgroundColor="#3b5998"
            style={styles.btnFacebook}
          >
            acebook
          </Icon.Button>
        </View>

        <View>
          <Icon.Button
            name="google"
            color={colors.black}
            backgroundColor={colors.white}
            style={styles.btnGoogle}
          >
            oogle
          </Icon.Button>
        </View>

      </View>

      <View style={{ top: 20 }}>
        <AppButton title="Registrate" color="black" onPress={() => navigation.navigate("register")} />
      </View>


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
    marginBottom: 20,
  },
  containerIconPass: {
    justifyContent: "center",
  },
  iconPass: {
    position: "absolute",
    paddingTop: 15,
    paddingRight: 15,
    right: 0,
  },
  logo: {
    height: 100,
    width: 320,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    top: 10,
    alignSelf: "center",
  },
  forgoutPass: {
    textAlign: "right",
    color: colors.black,
    marginBottom: 20,
  },
  btnFacebook: {
    width: 100,
  },
  containerSocial: {
    backgroundColor: colors.white,
    padding: 20,
  },
  btnGoogle: {
    width: 100,
  },
  containerSocialTitle: {
    position: "absolute",
    fontWeight: "bold",
    alignSelf: "center",
  },
  accounts: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    bottom: 0,
  },

});


