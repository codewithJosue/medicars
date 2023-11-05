import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import iconSize from '../../config/iconSize';
import colors from '../../config/colors';

const AppIcon = ({
  name,
  color = colors.secondary,
  size = iconSize.medium,
  ...otherProps
}) => <Icon name={name} size={size} color={color} {...otherProps} />;

export default AppIcon;
