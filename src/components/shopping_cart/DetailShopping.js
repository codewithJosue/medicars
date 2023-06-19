import React from 'react';
import {AppText, Screen} from '../index';
import AppModal from '../AppModal';
import {StyleSheet, View} from 'react-native';

const DetailShopping = () => {
  return (
    <Screen style={styles.container}>
      <AppText>cart</AppText>
    </Screen>
  );
};
export default DetailShopping;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});
