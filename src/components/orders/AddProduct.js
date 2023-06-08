import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppButton, Screen } from "../index";
import { useState } from "react";
import AppSelectList from "../AppSelectList";
import CardImage from "../CardImage";


import { aceites, marcas, vehicles } from "../../data/";


const AddProduct = ({ order: { title, image } }) => {
  const [selected, setSelected] = useState([]);
  const navigation = useNavigation();
  return (
    <Screen style={styles.container}>
      <CardImage img={image} height={150} />
      <View
        style={{
          margin: 10,
          flexDirection: "row",
          justifyContent: "space-around",
        }}>
        <View style={{ zIndex: 1 }}>
          <AppSelectList
            placeholder="Seleccionar vehículo"
            data={vehicles}
            setSelected={setSelected}
            width_max={false}
          />
        </View>
        <AppSelectList
          placeholder="Seleccionar marca"
          data={marcas}
          setSelected={setSelected}
          width_max={false}
        />
      </View>
      <View style={{ marginLeft: 20, flexDirection: "row" }}>
        <AppSelectList
          placeholder="Seleccionar Aceite"
          data={aceites}
          setSelected={setSelected}
          width_max={false}
        />
      </View>

      <View style={styles.footer}>
        <AppButton title="Seguir comprando" color="black" onPress={() => navigation.goBack()} />
        <View style={{ margin: 10 }} />
        <AppButton title="Agregar al carrito" onPress={() => console.log("press")} />
      </View>
    </Screen>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    width: "50%",
    position: "absolute",
    bottom: 0,
    padding: 10,
  },
});
