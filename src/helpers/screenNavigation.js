import { useNavigation } from "@react-navigation/native";

const navigation = useNavigation();
export const screenNavigation = (screen) => {
  navigation.navigate(screen);
};
