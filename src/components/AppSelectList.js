import SelectList from 'react-native-dropdown-select-list';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet} from 'react-native';

import colors from '../config/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const AppSelectList = ({
  data,
  placeholder = 'Seleccionar',
  setSelected,
  width_max = true,
}) => {
  return (
    <SelectList
      arrowicon={
        <FontAwesome
          name="chevron-down"
          size={12}
          color={'black'}
          style={!width_max && {right: 25}}
        />
      }
      inputStyles={[
        styles.dropdownContainerText,
        width_max ? {width: '100%'} : {width: 130},
      ]}
      maxHeight={100}
      placeholder={placeholder}
      searchPlaceholder="Búsqueda"
      boxStyles={[
        styles.inputStyle,
        width_max ? {width: '100%'} : {width: 150},
      ]}
      dropdownStyles={[
        styles.dropdownContainer,
        width_max ? {width: '100%'} : {width: 150},
      ]}
      searchicon={<Icon name="search-web" size={12} color={'black'} />}
      setSelected={setSelected}
      data={data}
    />
  );
};

export default AppSelectList;

const styles = StyleSheet.create({
  dropdownContainerText: {
    fontSize: 9,
    height: 10,
    fontWeight: 'bold',
  },
  dropdownContainer: {
    backgroundColor: colors.light,
    position: 'absolute',
    zIndex: 999,
  },
  inputStyle: {
    backgroundColor: colors.light,
    borderRadius: 25,
    marginVertical: 5,
  },
});
