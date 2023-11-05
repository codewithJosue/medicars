import DropDownPicker from 'react-native-dropdown-picker';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../config/colors';
import AppIcon from './shopping_cart/AppIcon';

const AppDropDownPicker = ({
  data,
  setValue,
  value,
  placeholder = 'Seleccione una opción',
  iconName = null,
  mode = 'MODAL',
  search = true,
}) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(data);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={placeholder}
        modalTitle="Elija una opción"
        style={styles.dropDownPicker}
        dropDownContainerStyle={styles.containerStyle}
        containerStyle={styles.container}
        modalContentContainerStyle={styles.modalContainer}
        searchContainerStyle={styles.searchContainer}
        searchPlaceholderTextColor={styles.searchPlaceholder}
        searchTextInputStyle={styles.searchTextInput}
        labelStyle={styles.label}
        textStyle={styles.label}
        modalAnimationType="slide"
        searchable={search}
        listMode={mode}
        disableBorderRadius
        language="ES"
        CloseIconComponent={({styles}) => (
          <AppIcon name="backspace" color={colors.danger} />
        )}
        showArrowIcon={true}
        ArrowDownIconComponent={() => {
          return value != null ? (
            <AppIcon name="check-decagram" size={17} color={colors.primary} />
          ) : (
            <AppIcon name="chevron-double-down" size={17} />
          );
        }}
        showTickIcon={true}
        TickIconComponent={({style}) => (
          <AppIcon name="star-check" size={17} color={colors.primary} />
        )}
      />
      {iconName != null && (
        <AppIcon name={iconName} size={17} style={styles.icon} />
      )}
    </View>
  );
};

export default AppDropDownPicker;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.white,
    borderWidth: 0.1,
    height: 200,
  },
  searchContainer: {
    backgroundColor: colors.light,
    borderBottomWidth: 0,
  },
  searchPlaceholder: {
    color: colors.secondary,
  },
  searchTextInput: {
    color: colors.black,
    fontWeight: 'bold',
  },
  container: {
    marginVertical: 10,
  },
  modalContainer: {},
  dropDownPicker: {
    backgroundColor: colors.light,
    borderWidth: 0,
    minHeight: 40,
  },
  label: {
    fontSize: 11,
    paddingLeft: 25,
  },
  icon: {
    position: 'absolute',
    zIndex: 9996,
    paddingTop: 22,
    left: 10,
  },
});
