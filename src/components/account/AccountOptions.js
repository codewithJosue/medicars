import { TouchableRipple } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { generateOptionsMenu, selectedComponent } from "../../helpers/generateOptionsMenu";
import { AppText } from "../index";

const AccountOptions = () => {

  const menuOptions = generateOptionsMenu(selectedComponent);

  return (
    <View style={{ backgroundColor: "white", marginTop: 10 }}>
      {menuOptions.map((item, index) => {
        return (
          <TouchableRipple key={index} onPress={item.onPress}>
            <View>
              <View style={styles.menuItem}>
                <Icon
                  name={item.iconNameLeft}
                  color={item.iconColorLeft}
                  size={25}
                />
                <AppText style={styles.menuItemText}>{item.title}</AppText>
              </View>

              <View style={styles.rightIcon}>
                <Icon
                  name={item.iconNameRight}
                  color={item.iconColorRight}
                  size={25}
                />
              </View>

            </View>
          </TouchableRipple>
        );
      })}
    </View>
  );
};

export default AccountOptions;

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    alignSelf: "stretch",
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  rightIcon: {
    position: "absolute",
    alignSelf: "center",
    top: 12,
    right: 5,
  },
});
