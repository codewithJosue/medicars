import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import { AppText } from "./index";

const Card = ({ title, subTitle, image }) => {

  return (
    <TouchableOpacity onPress={() => console.log("click image")} style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </TouchableOpacity>
  );
};
export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: colors.white,
    overflow: "hidden",
    marginTop: 10,
    width: "50%",
    margin: 2,
  },
  detailsContainer: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 100,
  },
  subTitle: {
    color: colors.primary,
    //fontWeight:'bold'
  },
  title: {
    marginBottom: 5,
    color: colors.secondary,
    fontWeight: "bold",
  },

});
