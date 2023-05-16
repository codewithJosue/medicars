import { Image, View } from "react-native";

const img = require("../assets/logoApp-icon.png");
const LogoHeader = ({ left = null }) => (

  <View style={left ? { left } : { alignSelf: "center" }}>
    <Image resizeMode="center" source={img} />
  </View>
);

export default LogoHeader;
