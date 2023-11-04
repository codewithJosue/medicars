import SelectList from 'react-native-dropdown-select-list';
import {StyleSheet} from 'react-native';

import colors from '../../config/colors';
import AppIcon from '../../navigations/AppIcon';

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
          <AppIcon
            name="chevron-down"
            size={25}
            style={{position: 'absolute', right: 0, padding: 7}}
          />
        }
        inputStyles={[styles.dropdownContainerText]}
        placeholder={placeholder}
        searchPlaceholder="Búsqueda"
        boxStyles={[styles.inputStyle]}
        dropdownStyles={[styles.dropdownContainer]}
        searchicon={
          <AppIcon name="search-web" size={12} style={{marginLeft: 20}} />
        }
        setSelected={setSelected}
        data={data}
      />
      {iconName != null && (
        <AppIcon name={iconName} size={20} style={styles.icon} />
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
    backgroundColor: colors.white,
    height: 180,
  },
  inputStyle: {
    backgroundColor: colors.light,
    borderRadius: 5,
    marginVertical: 10,
    height: 40,
    borderWidth: 0,
  },
  icon: {
    position: 'absolute',
    paddingTop: 15,
    left: 10,
  },
});
