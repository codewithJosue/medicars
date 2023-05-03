import { Platform, StyleSheet, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import defaultStyles from '../config/styles';

const AppTextInput = ({icon, ...otherProps}) => (
  <View style={styles.container}>
    {icon && (
      <Icon
        name={icon}
        size={20}
        color={defaultStyles.colors.medium}
        style={styles.icon}
      />
    )}
    <TextInput
      placeholderTextColor={defaultStyles.colors.medium}
      style={defaultStyles.text}
      {...otherProps}
    />
  </View>
);

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 5,
    flexDirection: 'row',
    width: '100%',
    padding: Platform.OS === 'android' ? 0 : 5,
    marginVertical: 5,
  },
  icon: {
    paddingTop: 15,
    marginRight: 5,
    paddingLeft:10,
  },
});
