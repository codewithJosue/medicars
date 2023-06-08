import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import colors from '../config/colors';

const AppButton = ({title, onPress, color = 'primary'}) => (
  <TouchableOpacity
    style={[styles.button, {backgroundColor: colors[color]}]}
    onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    //borderRadius: 5,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: '100%',
    marginVertical: 5,
    height: 35,
  },
  text: {
    color: colors.white,
    fontSize: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
