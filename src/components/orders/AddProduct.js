import { View } from "react-native";
import { AppButton, Screen } from "../index";
import { useState } from "react";
import AppSelectList from "../AppSelectList";
import CardImage from "../CardImage";


const img = require("../../assets/Aceite-Penzol.jpeg");

const vehicles = [{ key: "1", value: "Corolla 2008" }, { key: "2", value: "Mazda GT" }];
const marcas = [{ key: "1", value: "Castrol" }, { key: "2", value: "Elf" }, { key: "3", value: "Penzoil" }];

const aceites = [{ key: "1", value: "Aceite Supertech 25W60 Mineral Gl" },
  { key: "2", value: "Aceite Pennzoil Para Motor Gasolina 10W30 5 - 1Qt" }];

const AddProduct = () => {
  const [selected, setSelected] = useState([]);

  return (
    <Screen>
      <CardImage img={img} height={150} />
      <View style={{ margin: 10 }}>

        <View style={{ zIndex: 3 }}>
          <AppSelectList placeholder="Seleccionar vehículo" data={vehicles}
                         setSelected={setSelected}
          />
        </View>

        <View style={{ zIndex: 2 }}>
          <AppSelectList placeholder="Seleccionar marca" data={marcas}
                         setSelected={setSelected}
          />
        </View>

        <View style={{ zIndex: 1 }}>
          <AppSelectList placeholder="Seleccionar Aceite" data={aceites}
                         setSelected={setSelected}
          />
        </View>

        <View style={{ width: "50%", alignSelf: "flex-end" }}>
          <AppButton title="Agregar" onPress={() => console.log("press")} />
        </View>
      </View>
    </Screen>
  );
};

export default AddProduct;
