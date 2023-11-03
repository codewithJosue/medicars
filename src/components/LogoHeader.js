import {Image} from 'react-native';

const img = require('../assets/logoApp-icon.png');
const LogoHeader = ({width = 100, height = 50}) => (
  <Image
    resizeMode="contain"
    source={img}
    style={{width: width, height: height}}
  />
);

export default LogoHeader;
