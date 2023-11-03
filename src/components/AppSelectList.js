import SelectList from 'react-native-dropdown-select-list';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet} from 'react-native';

import colors from '../config/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import iconSize from '../config/iconSize';

const AppSelectList = ({
  data,
  placeholder = 'Seleccionar',
  setSelected,
  iconName = null,
}) => {
  return (
    <>
      <SelectList
        arrowicon={
          <FontAwesome name="chevron-down" size={10} color={'black'} />
        }
        inputStyles={[styles.dropdownContainerText]}
        placeholder={placeholder}
        searchPlaceholder="Búsqueda"
        boxStyles={[styles.inputStyle]}
        dropdownStyles={[styles.dropdownContainer]}
        searchicon={<Icon name="search-web" size={12} color={'black'} />}
        setSelected={setSelected}
        data={data}
      />
      {iconName != null && (
        <Icon name={iconName} size={iconSize.small} style={styles.icon} />
      )}
    </>
  );
};

export default AppSelectList;

const styles = StyleSheet.create({
  dropdownContainerText: {
    fontSize: 10,
    height: 40,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  dropdownContainer: {
    backgroundColor: colors.light,
    position: 'absolute',
    zIndex: 999,
    width: '100%',
  },
  inputStyle: {
    backgroundColor: colors.light,
    borderRadius: 5,
    marginVertical: 10,
    height: 40,
  },
  icon: {
    position: 'absolute',
    paddingTop: 15,
    left: 10,
  },
});
