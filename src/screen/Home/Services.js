import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import { AppText } from "../../components";

const listings = [
  {
    id: 1,
    title: "Aceite Penzol",
    price: 100,
    image: require("../../assets/Aceite-1.jpg"),
  },
  {
    id: 2,
    title: "Aceite Penzol",
    price: 150,
    image: require("../../assets/PZ-3.jpeg"),
  },
];

const Services = () => {
  return (

    <AppText>Services</AppText>
 
  );
};

export default Services;

const styles = StyleSheet.create({
  screen: {
    padding: 5,
    backgroundColor: colors.light,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "space-between",
    alignContent: "space-between",
  },
});

