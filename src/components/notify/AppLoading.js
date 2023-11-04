import React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import colors from '../../config/colors';
import {StyleSheet, View} from 'react-native';

const AppLoading = () => {
  return (
    <View style={styles.indicator}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};
export default AppLoading;

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
