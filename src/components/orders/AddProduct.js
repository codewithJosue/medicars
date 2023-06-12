import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppButton, AppText, Screen } from "../index";
import { useState } from "react";
import AppSelectList from "../AppSelectList";
import CardImage from "../CardImage";


import { aceites, marcas, vehicles } from "../../data/";
import { Badge } from "react-native-paper";

const options = ["marca", "vehicle", "aceite"];

const AddProduct = ({ order: { title, image }, toasRef, toasRefError }) => {

  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedOil, setSelectedOil] = useState("");

  const [data, setData] = useState([]);

  const navigation = useNavigation();

  const onSubmitDataVehicle = () => {

    if (!data.some((e) => e.vehicle === selectedVehicle)) {
      setData([...data, {
        vehicle: selectedVehicle,
        brand: selectedBrand,
        oil: selectedOil,
      }]);

      toasRef.current.show("Se agrego correctamente", 3000);
    }


  };

  console.log(data);
  return (
    <Screen style={styles.container}>
      <CardImage img={image} height={150} title={title} />
      <View
        style={{
          margin: 10,
          flexDirection: "row",
          justifyContent: "space-around",
        }}>
        <View style={{ zIndex: 3 }}>
          <AppSelectList
            placeholder="Seleccionar vehículo"
            data={vehicles}
            setSelected={setSelectedVehicle}
            width_max={false}
          />
        </View>
        <View style={{ zIndex: 2 }}>
          <AppSelectList
            placeholder="Seleccionar marca"
            data={marcas}
            setSelected={setSelectedBrand}
            width_max={false}
          />
        </View>
      </View>
      <View style={{ marginLeft: 20, flexDirection: "row", zIndex: 1 }}>
        <AppSelectList
          placeholder="Seleccionar Aceite"
          data={aceites}
          setSelected={setSelectedOil}
          width_max={false}
        />
      </View>

      <View style={{ alignSelf: "flex-end", width: "40%", right: 20 }}>
        <AppButton title="Agregar" onPress={onSubmitDataVehicle} />
      </View>

      <View style={{ alignSelf: "center", top: 40, width: "80%" }}>
        <TouchableOpacity style={{ backgroundColor: "white", borderRadius: 25, elevation: 2 }}>
          <AppText style={{ textAlign: "center" }}>lista de elementos agregegados
          </AppText>
        </TouchableOpacity>
        <Badge style={{ backgroundColor: "black", right: 20, position: "absolute" }} size={15}>{data.length}</Badge>
      </View>

      <View style={styles.footer}>
        <AppButton title="Seguir comprando" color="black" onPress={() => navigation.goBack()} />
        <View style={{ margin: 10 }} />
        <AppButton title="Ir al carrito" onPress={() => console.log("press")} />
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
