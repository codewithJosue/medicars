import React from "react";
import { View, SafeAreaView, StyleSheet, Platform } from "react-native";

const Screen = ({children, style}) => (
<SafeAreaView style={[styles.screen]}>
  <View style={style}>{children}</View>
</SafeAreaView>
);

export default Screen;

const styles = StyleSheet.create({
  screen:{
    flex:1,
    paddingTop: Platform.OS === 'android' ? 0 : 0
  }
})
