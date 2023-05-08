import { useState } from "react";
import { StyleSheet,View } from "react-native";
import { AppText } from "./index";

const AvatarText = ({size='small'}) => {

  const [avatar, setAvatar] = useState("Josue");

  return (
    <View style={styles.container}>
    <AppText>
      {avatar.substring(0, 2).toLocaleUpperCase()}
    </AppText>
    </View>
  )
}

export default AvatarText;

const styles = StyleSheet.create({
  container:{
    width:30,
    height:30,
    borderRadius:25,
    backgroundColor:'blue',
    justifyContent:'center',
    padding:5,
  }
})

