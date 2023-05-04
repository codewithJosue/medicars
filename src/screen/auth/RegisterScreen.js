import  { useState, useEffect } from "react";
import { Dimensions, Image, StyleSheet, View, ScrollView } from "react-native";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import StepIndicator from 'react-native-step-indicator';
import SelectList from 'react-native-dropdown-select-list';


import {AppButton,AppText,Screen} from "../../components";
import { AppForm, AppFormField, SubmitButton } from "../../components/forms";
import colors from "../../config/colors";
import customStyles from '../../config/customStyleSteps';

import defaultStyles from "../../config/styles";


const validationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es requerido").label("Name"),
  email: Yup.string().required("El email es obligatorio").label("Email"),
  password: Yup.string()
    .required("La contraseña es obligatoria")
    .min(5, "Minímo 5 caracteres")
    .label("Password"),
});

const labels = ["Datos Personales","Datos del vehiculo"];


const RegisterScreen = () => {

  const logo = require("../../assets/logoApp.png");

  const [eyePassword, setEyePassword] = useState(true);
  const [currentPosition, setCurrentPosition] = useState(1);
  const [form, setForm] = useState(true);
  const [data, setData] = useState({name:'', lastName:'', phone:"",email:"",password:"", passwordRepeat:""});

  const [selected, setSelected] = useState("");

  const data2 = [{key:'1',value:'Jammu & Kashmir'}];


  const onChange_text = (e, type) => {
    setData({
      ...data,
      [type]: e.nativeEvent.text,
    });
  };


  useEffect(()=> {},[currentPosition])

  const onPageChange = (value) => {
    setForm(false);
    setCurrentPosition(currentPosition+1);

  }


  const backPageChange = (value) => {
    setCurrentPosition(0);
    setForm(true);
  }

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
        <Image style={styles.logo} source={logo} />
      </View>

      {form ? (
        <AppForm
          initialValues={data}
          onSubmit={(value)=> onPageChange(value)}
          validationSchema={validationSchema}>

          <View>
            <AppFormField
              autoCorrect={false}
              icon="account"
              name="name"
              value={data.name}
              onChange={(e) => onChange_text(e, 'name')}
              placeholder="Nombres"
            />
            <AppFormField
              autoCorrect={false}
              icon="account"
              name="lastName"
              value={data.lastName}
              onChange={(e) => onChange_text(e, 'lastName')}
              placeholder="Apellidos"
            />
            <AppFormField
              autoCorrect={false}
              icon="phone"
              name="phone"
              value={data.phone}
              onChange={(e) => onChange_text(e, 'phone')}
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
              onChange={(e) => onChange_text(e, 'email')}
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
                onChange={(e) => onChange_text(e, 'password')}
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
                onChange={(e) => onChange_text(e, 'passwordRepeat')}
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
      ): (
        <AppForm
          initialValues={data}
          onSubmit={(value)=> backPageChange(value)}
          validationSchema={validationSchema}>
          <ScrollView>
            <View>
              <AppText style={styles.textDropdown}>
                Marca
              </AppText>
              <SelectList
                maxHeight={60}
                placeholder="Seleccionar"
                searchPlaceholder="Búsqueda"
                boxStyles={styles.inputStyle}
                dropdownStyles={styles.dropdownContainer}
                searchicon={<Icon name="search-web" size={12} color={'black'} />}
                setSelected={setSelected} data={data2} onSelect={() => alert(selected)} />
            </View>
            <View>
              <AppText style={styles.textDropdown}>
                Modelo
              </AppText>
              <SelectList
                maxHeight={60}
                placeholder="Seleccionar"
                searchPlaceholder="Búsqueda"
                boxStyles={styles.inputStyle}
                dropdownStyles={styles.dropdownContainer}
                searchicon={<Icon name="search-web" size={12} color={'black'} />}
                setSelected={setSelected} data={data2} onSelect={() => alert(selected)} />
            </View>
            <View style={{flexDirection:"row", width:"35%", justifyContent:"space-between"}}>
              <SelectList
                inputStyles={styles.dropdownContainerText}
                maxHeight={60}
                placeholder="año"
                searchPlaceholder="Búsqueda"
                boxStyles={styles.inputStyle}
                dropdownStyles={styles.dropdownContainerMin}
                searchicon={<Icon name="search-web" size={12} color={'black'} />}
                setSelected={setSelected} data={data2} onSelect={() => alert(selected)} />
              <View style={{ margin:20 }} />
              <SelectList
                inputStyles={styles.dropdownContainerText}
                maxHeight={60}
                dropdownItemStyles={styles.dropdownContainerMin}
                placeholder="Motor"
                searchPlaceholder="Búsqueda"
                boxStyles={styles.inputStyle}
                dropdownStyles={styles.dropdownContainerMin}
                searchicon={<Icon name="search-web" size={12} color={'black'} />}
                setSelected={setSelected} data={data2} onSelect={() => alert(selected)} />

            </View>

          </ScrollView>
          <View>
            <View style={styles.botones}>
              <AppButton title="Guardar" onpress={()=> console.log("guardar")} />
                <View style={{padding:20}}/>

                <SubmitButton title="Atrás" color="secondary" />

            </View>
          </View>
        </AppForm>
      )}

    </Screen>
  );
}

export default RegisterScreen;

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  containerLogo: {
    alignSelf: "center",
    marginTop: 0,
    marginBottom: 20,
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
    top:20,
    alignSelf:"center"
  },
  botones: {
    flexDirection: 'row',
    width: '45%',
    //justifyContent:'space-between',
    //alignContent:'space-between'
  },
  dropdownContainer: {
    backgroundColor: colors.light,
    width:"100%",
    borderRadius:10
  },
  dropdownContainerMin: {
    backgroundColor: colors.light,
    width:165,
    borderRadius:10
  },
  dropdownContainerText:{
    width:102,
    fontSize:12,
  },
  inputStyle: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 5,
    flexDirection: 'row',
    width: '100%',
    padding: 0,
    marginVertical: 5,
  },
  textDropdown: {
    marginVertical:5,
    //paddingRight:10,
  }
});

