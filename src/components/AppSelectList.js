import SelectList from 'react-native-dropdown-select-list';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet } from "react-native";

import colors from "../config/colors";

const AppSelectList = ({data,placeholder='Seleccionar', setSelected, min=true}) => {

  return (
    <SelectList
      inputStyles={styles.dropdownContainerText}
      maxHeight={100}
      placeholder={placeholder}
      searchPlaceholder="Búsqueda"
      boxStyles={min ? styles.inputStyle : styles.inputStyleMin}
      dropdownStyles={min ? styles.dropdownContainer : styles.dropdownContainerMin}
      searchicon={<Icon name="search-web" size={12} color={'black'} />}
      setSelected={setSelected} data={data}  />
  )
}

export default AppSelectList;

const styles = StyleSheet.create({
  dropdownContainerText:{
    width:"100%",
    fontSize:12,
    fontWeight:"bold",
  },
  dropdownContainer: {
    backgroundColor: colors.light,
    width:"100%",
    borderRadius:10,
    position:"absolute"

  },
  dropdownContainerMin: {
    backgroundColor: colors.light,
    width:165,
    position:"absolute"
  },
  inputStyle: {
    backgroundColor: colors.light,
    borderRadius: 5,
    width: '100%',
    padding: 0,
    marginVertical: 5,
  },

  inputStyleMin: {
    backgroundColor: colors.light,
    borderRadius: 5,
    width: 165,
    padding: 0,
    marginVertical: 5,
  },
})
