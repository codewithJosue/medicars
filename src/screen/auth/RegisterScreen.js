import { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import StepIndicator from "react-native-step-indicator";


import { AppButton, Screen } from "../../components";
import { AppForm, AppFormField, SubmitButton } from "../../components/forms";
import colors from "../../config/colors";

import customStyles from "../../config/customStyleSteps";

import defaultStyles from "../../config/styles";
import AppSelectList from "../../components/AppSelectList";
import { Divider } from "@rneui/base";


const validationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es requerido").label("Name"),
  email: Yup.string().required("El email es obligatorio").label("Email"),
  password: Yup.string()
    .required("La contraseña es obligatoria")
    .min(5, "Minímo 5 caracteres")
    .label("Password"),
});

const labels = ["Datos Personales", "Datos del vehiculo"];


const RegisterScreen = () => {

  const logo = require("../../assets/logoApp.png");

  const [eyePassword, setEyePassword] = useState(true);
  const [currentPosition, setCurrentPosition] = useState(1);
  const [form, setForm] = useState(true);
  const [data, setData] = useState({ name: "", lastName: "", phone: "", email: "", password: "", passwordRepeat: "" });

  const [selected, setSelected] = useState("");

  const data2 = [{ key: "1", value: "Jammu & Kashmir" }];


  const onChange_text = (e, type) => {
    setData({
      ...data,
      [type]: e.nativeEvent.text,
    });
  };


  useEffect(() => {
  }, [currentPosition]);

  const onPageChange = (value) => {
    setForm(false);
    setCurrentPosition(currentPosition + 1);

  };


  const backPageChange = (value) => {
    setCurrentPosition(0);
    setForm(true);
  };

  console.log(data);

  return (
    <Screen style={styles.container}>

      <StepIndicator
        customStyles={customStyles}
        currentPosition={currentPosition}
        labels={labels}
        stepCount={2}
      />

      <View style={styles.containerLogo}>
        {/*<Image style={styles.logo} source={logo} />*/}
      </View>

      {form ? (
        <AppForm
          initialValues={data}
          onSubmit={(value) => onPageChange(value)}
          validationSchema={validationSchema}>

          <View>
            <AppFormField
              autoCorrect={false}
              icon="account"
              name="name"
              value={data.name}
              onChange={(e) => onChange_text(e, "name")}
              placeholder="Nombres"
            />
            <AppFormField
              autoCorrect={false}
              icon="account"
              name="lastName"
              value={data.lastName}
              onChange={(e) => onChange_text(e, "lastName")}
              placeholder="Apellidos"
            />
            <AppFormField
              autoCorrect={false}
              icon="phone"
              name="phone"
              value={data.phone}
              onChange={(e) => onChange_text(e, "phone")}
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
              onChange={(e) => onChange_text(e, "email")}
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
                onChange={(e) => onChange_text(e, "password")}
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
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                name="passwordRepeat"
                placeholder="Repetir contraseña"
                secureTextEntry={eyePassword}
                textContentType="password"
                value={data.passwordRepeat}
                onChange={(e) => onChange_text(e, "passwordRepeat")}
              />
              <Icon
                onPress={() => setEyePassword(!eyePassword)}
                style={styles.iconPass}
                name={eyePassword ? "eye-off" : "eye"}
                size={25}
                color={eyePassword ? colors.medium : colors.secondary}
              />
            </View>
            <SubmitButton title="siguiente" />

          </View>
        </AppForm>
      ) : (
        <AppForm
          initialValues={data}
          onSubmit={(value) => backPageChange(value)}
          validationSchema={validationSchema}>
          <ScrollView>

            <View style={{ zIndex: 4 }}>
              <AppSelectList placeholder="Seleccione la marca" setSelected={setSelected} data={data2} />
            </View>

            <View style={{ zIndex: 3 }}>
              <AppSelectList placeholder="Seleccione el modelo" setSelected={setSelected} data={data2} />
            </View>

            <View style={{ zIndex: 2, flexDirection: "row", justifyContent: "space-between" }}>
              <View>

                <AppSelectList placeholder="Seleccione el año" setSelected={setSelected} min={false} data={data2} />
              </View>
              <Divider orientation="vertical" />
              <View>
                <AppSelectList placeholder="Seleccione el motor" setSelected={setSelected} min={false} data={data2} />
              </View>
            </View>

            <View>
              <View style={styles.botones}>
                <SubmitButton title="Atrás" color="black" />
                <View style={{ padding: 20 }} />
                <AppButton title="Guardar" onpress={() => console.log("guardar")} />
              </View>
            </View>
          </ScrollView>
        </AppForm>
      )}

    </Screen>
  );
};

export default RegisterScreen;

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  containerLogo: {
    alignSelf: "center",
    marginTop: 15,
  },
  iconPass: {
    position: "absolute",
    paddingTop: 15,
    right: 10,
  },
  logo: {
    height: 100,
    width: 310,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    top: 20,
    alignSelf: "center",
  },
  botones: {
    flexDirection: "row",
    width: "45%",
    marginTop: 100,
    bottom: 0,
  },
  dropdownContainer: {
    backgroundColor: colors.light,
    width: "100%",
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
    flexDirection: "row",
    width: "100%",
    padding: 0,
    marginVertical: 5,
  },
  textDropdown: {
    marginVertical: 5,
    //paddingRight:10,
  },
  containerMotorYear: {
    flexDirection: "row",
    padding: 2,
    justifyContent: "space-between",
    width: "42%",
  },

});

