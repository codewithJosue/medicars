import colors from "../config/colors";
import route from "../navigations/route";
import { screenNavigation } from "./screenNavigation";

export const generateOptionsMenu = (selectedComponent) => [

  {
    title: "Información de la cuenta",
    iconNameLeft: "account-settings",
    iconColorLeft: colors.primary,
    iconNameRight: "chevron-right",
    iconColorRight: "#ccc",
    onPress: () => selectedComponent(route.ACCOUNT),
  },
  {
    title: "Acerca de Medicars",
    iconNameLeft: "information",
    iconColorLeft: colors.secondary,
    iconNameRight: "chevron-right",
    iconColorRight: "#ccc",
    onPress: () => selectedComponent(route.ABOUT),
  },
];

export const selectedComponent = (key) => {
  switch (key) {
    case route.ACCOUNT:
      screenNavigation(route.ACCOUNT);
      break;
    case route.ABOUT:
      screenNavigation(route.ABOUT);
      break;
    default:
      break;
  }
};
