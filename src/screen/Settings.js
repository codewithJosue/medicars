import React from "react";
import { StyleSheet } from "react-native";
import { Screen } from "../components";
import AccountOptions from "../components/account/AccountOptions";

const Settings = () => (
  <Screen style={styles.container}>
    <AccountOptions />
  </Screen>
);

export default Settings;

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    backgroundColor: "#f2f2f2",
  },
});
