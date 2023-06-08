import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import colors from "../config/colors";

const Screen = ({ children, style }) => (
  <SafeAreaView style={[styles.screen]}>
    <View style={style}>{children}</View>
  </SafeAreaView>
);

export default Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: colors.white,
  },
});
