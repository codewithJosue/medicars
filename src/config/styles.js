import {Platform} from 'react-native';
import colors from './colors';

export default {
  colors,
  text: {
    color: colors.black,
    width: '100%',
    fontSize: 11,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
};
