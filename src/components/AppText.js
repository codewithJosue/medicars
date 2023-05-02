import { Text } from "react-native";

import defaultStyle from '../config/styles';

const AppText = ({children, style}) => (
  <Text style={[defaultStyle.text, style]}>
    {children}
  </Text>
);

export default AppText;
