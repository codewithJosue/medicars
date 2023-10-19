import {Platform, StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import defaultStyles from '../config/styles';

const AppTextInput = ({icon, ...otherProps}) => (
  <View style={styles.container}>
    {icon && (
      <Icon
        name={icon}
        size={17}
        color={defaultStyles.colors.secondary}
        style={styles.icon}
      />
    )}
    <TextInput
      placeholderTextColor={defaultStyles.colors.grey_medium}
      style={defaultStyles.text}
      {...otherProps}
    />
  </View>
);

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: Platform.OS === 'android' ? 0 : 5,
    marginVertical: 5,
    height: 35,
  },
  icon: {
    paddingTop: 6,
    marginRight: 20,
    paddingLeft: 10,
  },
});
